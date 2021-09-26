import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, max, takeUntil, timeout } from 'rxjs/operators';
import { CssService } from 'src/app/services/css.service';
import { CubeDataService } from 'src/app/services/cube-data.service';
import { ICube } from '../cube/cube.component';
import { ICubePosition } from 'src/app/services/cube-data.service';
import { ConditionalExpr } from '@angular/compiler';
import { Scroll } from '@angular/router';

@Component({
  selector: 'hupi-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit, OnDestroy {

  @ViewChild('container', { static: true }) cubesContainer: ElementRef | undefined;
  @ViewChild('scrollBtn', { static: true }) scrollBtn: ElementRef | undefined;

  @Input() asList = false;
  @Input() row: IRow | undefined;
  @Input() set viewReady(ready: boolean) {
    this._viewReady = true;
    if (this.viewInitialized)
      this.initialize();
  }

  _viewReady = false;
  viewInitialized = false;
  page = 0;
  maxPage$ = new BehaviorSubject(0);
  toScroll = 0;
  destroy$ = new Subject<void>();
  showPreviewTimer: any;
  mouseOverCube = false;

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

  ngAfterViewInit(): void {
    this.viewInitialized = true;
    if (this._viewReady) {
      this.initialize();
    }
  }

  initialize(): void {
    console.log("init");
    this.cssService.setVirtualWidth();
    this.setMaxPage();
    this.calculateScroll();
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
    console.log(this.cubesContainer?.nativeElement.scrollWidth);
    // console.log(this.cubesContainer?.nativeElement.scrollWidth / this.cubesContainer?.nativeElement.offsetWidth);
    let maxPage = this.cubesContainer?.nativeElement.scrollWidth / this.cubesContainer?.nativeElement.clientWidth;
    maxPage = Math.ceil(maxPage) - 1;
    this.maxPage$.next(maxPage);
    this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onMouseEnter(cube: ICube, cubeElement: any): void {
    this.mouseOverCube = true;
    this.cubeDataService.setData(this.getPosition(cubeElement), cube);
    this.startTimer();
  }

  onMouseOut(): void {
    this.mouseOverCube = false;
    this.clearTimer();
  }

  sendData(cube: ICube, cubeElement: any): void {
  }

  startTimer() {
    this.showPreviewTimer = setTimeout(() => {
      this.cubeDataService.previewActive$.next(true);
    }, 500);
  }

  expandCube() {
    this.cubeDataService.expandedActive$.next(true);
  }

  @HostListener('mousewheel', ['$event'])
  onScroll(event: WheelEvent): void {
    this.clearTimer();
    if (this.mouseOverCube) {
      this.startTimer();
    }
  }

  clearTimer(): void {
    clearTimeout(this.showPreviewTimer);
  }

  getPosition(cubeElement: any): ICubePosition {
    let cubeRect = cubeElement.hostElement.nativeElement.getBoundingClientRect();
    let left = cubeRect.left + document.body.scrollLeft;
    let right = cubeRect.right + document.body.scrollLeft;
    let width = right - left;
    let transformFactor = 1;
    let transformOrigin = "top";
    if (left < width) {
      transformFactor = 0;
      transformOrigin = "left top";
    } else if (right > window.innerWidth - width) {
      transformFactor = 2;
      transformOrigin = "right top";
    }
    return {
      previewTop: cubeElement.hostElement.nativeElement.getBoundingClientRect().top + document.body.scrollTop,
      expandedTop: cubeElement.hostElement.nativeElement.getBoundingClientRect().top,
      left: left,
      right: right,
      transformOrigin: transformOrigin,
      transformFactor: transformFactor,
      baseWidth: width
    }
  }
}

export interface IRow {
  cubes: ICube[];
  title: string;
}

