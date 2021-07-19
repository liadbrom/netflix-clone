
import { ConditionalExpr } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { ICube } from '../cube/cube.component';


@Component({
  selector: 'hupi-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
})
export class RowComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('container') cubesContainer: ElementRef | undefined;
  @ViewChild('scrollBtn') scrollBtn: ElementRef | undefined;
  @Input() row: IRow | undefined;

  page = 0;
  maxPage: number | undefined;
  toScroll = 0;

  destroy$ = new Subject<void>();

  constructor() { }

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
    this.setMaxPage();
    setTimeout(() => {
      this.calculateScroll();
    }, 0);
  }

  scroll(direction: number): void {
    if (this.cubesContainer) {
      this.page += direction;
      this.cubesContainer.nativeElement.scrollLeft = this.toScroll * this.page;
    }
    // IDEA: loop scrolling (wrap around)
  }

  calculateScroll(): void {
    if (this.cubesContainer && this.scrollBtn) {
      const thumbnailWidth = this.scrollBtn.nativeElement.getBoundingClientRect().width;
      const containerWidth = this.cubesContainer.nativeElement.getBoundingClientRect().width;
      this.toScroll = - containerWidth + 2 * thumbnailWidth;
    }
  }

  setMaxPage(): void {
    this.maxPage = this.cubesContainer?.nativeElement.scrollWidth / this.cubesContainer?.nativeElement.clientWidth;
    this.maxPage = Math.floor(this.maxPage);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

export interface IRow {
  cubes: ICube[];
  title: string;
}

