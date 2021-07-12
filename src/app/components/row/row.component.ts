import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ICube } from '../cube/cube.component';


@Component({
  selector: 'hupi-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowComponent implements OnInit, AfterViewInit {

  @ViewChild('container') cubesContainer: ElementRef | undefined;
  @ViewChild('scrollBtn') scrollBtn: ElementRef | undefined;
  @Input() row: IRow | undefined;

  scrollOffset = 0;
  toScroll = 0;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    if (this.cubesContainer) {
      const thumbnailWidth = Number(this.scrollBtn?.nativeElement.clientWidth);
      this.toScroll = this.cubesContainer.nativeElement.offsetWidth - 4 * thumbnailWidth;
    }
  }

  scroll(direction: number): void {
    if (this.cubesContainer) {
      this.scrollOffset += this.toScroll * direction;
      this.cubesContainer.nativeElement.scrollLeft = this.scrollOffset;
    }
  }

}

export interface IRow {
  cubes: ICube[];
  title: string;
}

