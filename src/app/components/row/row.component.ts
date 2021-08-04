import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil, timeout } from 'rxjs/operators';
import { CssService } from 'src/app/services/css.service';
import { CubeDataService } from 'src/app/services/cube-data.service';
import { ICube } from '../cube/cube.component';
import { IPosition } from '../preview-cube/preview-cube.component';

@Component({
  selector: 'hupi-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit, OnDestroy {

  @ViewChild('container', { static: true }) cubesContainer: ElementRef | undefined;
  @ViewChild('scrollBtn', { static: true }) scrollBtn: ElementRef | undefined;

  @Input() row: IRow | undefined;
  @Input() set viewReady(ready: boolean) {
    if (ready) {
      this.cssService.setVirtualWidth();
      this.setMaxPage();
      this.calculateScroll();
    }
  }

  page = 0;
  maxPage$ = new BehaviorSubject(0);
  toScroll = 0;
  destroy$ = new Subject<void>();
  showPreviewTimer: any;

  constructor(private cssService: CssService, private cdRef: ChangeDetectorRef, private cubeDataService: CubeDataService) { }

  ngOnInit(): void {
    const resize$ = fromEvent(window, 'resize');
    resize$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.calculateScroll();
      this.scroll(0);
    });
  }


  scroll(direction: number): void {
    if (this.cubesContainer) {
      this.page += direction;
      this.cubesContainer.nativeElement.scrollLeft = this.toScroll * this.page;
    }
  }

  calculateScroll(): void {
    if (this.cubesContainer && this.scrollBtn) {
      let thumbnailWidth = this.scrollBtn.nativeElement.getBoundingClientRect().width;
      if (thumbnailWidth === 0) {
        thumbnailWidth = + (window.getComputedStyle(this.scrollBtn.nativeElement).getPropertyValue('width')).replace('px', '');
      }
      const containerWidth = this.cubesContainer.nativeElement.getBoundingClientRect().width;
      this.toScroll = - containerWidth + 2 * thumbnailWidth;
    }
  }

  setMaxPage(): void {
    let maxPage = this.cubesContainer?.nativeElement.scrollWidth / this.cubesContainer?.nativeElement.clientWidth;
    maxPage = Math.ceil(maxPage) - 1;
    this.maxPage$.next(maxPage);
    this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  sendData(cube: ICube, cubeElement: any): void {
    this.cubeDataService.setData(this.getPosition(cubeElement), cube);
    this.showPreviewTimer = setTimeout(() => {
      this.cubeDataService.previewActive$.next(true);
    }, 500);
  }

  clearTimer(): void {
    clearTimeout(this.showPreviewTimer);
  }

  getPosition(cubeElement: any): IPosition {
    let left = cubeElement.hostElement.nativeElement.getBoundingClientRect().left + document.documentElement.scrollLeft;
    let right = cubeElement.hostElement.nativeElement.getBoundingClientRect().right + document.documentElement.scrollLeft;
    let width = right - left;
    let transformOrigin = "center";
    if (left < width) {
      transformOrigin = "left";
    } else if (right > window.innerWidth - width) {
      transformOrigin = "right";
    }
    return {
      top: cubeElement.hostElement.nativeElement.getBoundingClientRect().top + document.documentElement.scrollTop,
      left: left,
      right: right,
      transformOrigin: transformOrigin
    }
  }
}

export interface IRow {
  cubes: ICube[];
  title: string;
}

