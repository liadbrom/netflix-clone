import { ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { CssService } from 'src/app/services/css.service';
import { CubeDataService } from 'src/app/services/cube-data.service';
import { ICube } from '../cube/cube.component';

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
  pageScrollAccuracy = 0.05
  maxPage$ = new BehaviorSubject(0);
  toScroll = 0;
  thumbnailWidth = 0;

  destroy$ = new Subject<void>();
  showPreviewTimer: any;
  mouseOverCube = false;
  mouseOverContainer = false;
  currCubeElement?: object;
  currCube?: ICube;

  constructor(private cssService: CssService, private cdRef: ChangeDetectorRef, private cubeDataService: CubeDataService) { }

  ngOnInit(): void {
    const resize$ = fromEvent(window, 'resize');
    resize$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.calculateScroll();
      this.setMaxPage();
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
    this.cssService.setVirtualWidth();
    this.calculateScroll();
    this.setMaxPage();
  }


  scroll(direction: number): void {
    if (this.cubesContainer) {
      this.page += direction;
      this.cubesContainer.nativeElement.scrollLeft = this.toScroll * this.page;
    }
  }

  calculateScroll(): void {
    if (this.cubesContainer && this.scrollBtn) {
      this.thumbnailWidth = this.scrollBtn.nativeElement.getBoundingClientRect().width;
      if (this.thumbnailWidth === 0) {
        this.thumbnailWidth = + (window.getComputedStyle(this.scrollBtn.nativeElement).getPropertyValue('width')).replace('px', '');
      }
      const containerWidth = this.cubesContainer.nativeElement.getBoundingClientRect().width;
      this.toScroll = - containerWidth + 2 * this.thumbnailWidth;
    }
  }

  setMaxPage(): void {
    let maxPage = this.cubesContainer?.nativeElement.scrollWidth / (this.cubesContainer?.nativeElement.getBoundingClientRect().width);
    maxPage = Math.ceil(maxPage) - (this.isFullPage(maxPage) ? 0 : 1);
    this.maxPage$.next(maxPage);
    this.cdRef.detectChanges();
  }

  isFullPage(maxPage: number): boolean {
    const diff = Math.ceil(maxPage) - maxPage;
    return (diff > 0 && diff < this.pageScrollAccuracy);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onMouseEnter(cube: ICube, cubeElement: any): void {
    this.mouseOverCube = true;
    this.currCubeElement = cubeElement;
    this.currCube = cube;
    this.startTimer();
  }

  onMouseOut(): void {
    this.mouseOverCube = false;
    this.clearTimer();
  }

  startTimer(): void {
    this.showPreviewTimer = setTimeout(() => {
      this.cubeDataService.setData(this.currCubeElement, this.currCube);
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
}


export interface IRow {
  cubes: ICube[];
  title: string;
}

