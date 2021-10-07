import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { ICube } from '../cube/cube.component';
import { ICubePosition } from 'src/app/services/cube-data.service';
import { CubeDataService } from 'src/app/services/cube-data.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationEvent,
} from '@angular/animations';

@Component({
  selector: 'hupi-preview-cube',
  templateUrl: './preview-cube.component.html',
  styleUrls: ['./preview-cube.component.scss'],
  animations: [
    trigger('growShrink', [
      state('grow', style({ transform: 'scale(1.5) translateY(calc(-0.5 * var(--cube-height)))' })),
      state('shrink', style({ transform: 'scale(1)' })),
      transition('shrink => grow', animate('150ms ease-out')),
      transition('grow => shrink', animate('150ms ease-out')),
    ]),
  ],
})
export class PreviewCubeComponent implements OnInit {

  constructor(private cubeDataService: CubeDataService) { }

  cubeData?: {
    position: ICubePosition | undefined,
    cube: ICube | undefined,
    cubeElement: any
  }
  tempCubeData?: {
    position: ICubePosition;
    cube: ICube | undefined;
    cubeElement: any;
  }
  @Input() active = false;
  shrinked = true;
  barOpacity = 0;
  transformOrigin = "center";
  expandedActive = false;

  ngOnInit(): void {
    this.cubeDataService.expandedActive$.subscribe(value => {
      this.expandedActive = value;
    })
    this.cubeDataService.currentCubeData$.subscribe(value => {
      if (this.shrinked) {
        this.assignData(value);
      }
      this.tempCubeData = value;
    });
  }

  onAnimationEnd(event: AnimationEvent): void {
    if (event.fromState === "grow" && event.toState === "shrink") {
      this.shrinked = true;
      if (this.tempCubeData) {
        this.assignData(this.tempCubeData);
      }
    }
  }

  onAnimationStart(event: AnimationEvent): void {
    if (event.fromState === "grow") {
      if (!this.expandedActive) {
        this.shrinked = false;
      }
      this.barOpacity = 0;
    }
    if (event.fromState === "shrink") {
      this.barOpacity = 1;
    }
  }

  assignData(value: any): void {
    this.cubeData = { ...value };
  }

  expand(): void {
    this.active = false;
    this.cubeDataService.expandedActive$.next(true);
  }

  @HostListener('mousewheel', ['$event'])
  onScroll(event: WheelEvent): void {
    this.cubeDataService.setData(this.cubeData?.cubeElement, this.cubeData?.cube);
  }
}