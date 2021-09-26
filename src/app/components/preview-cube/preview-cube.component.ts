import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  cube: ICube | undefined;
  position: ICubePosition | undefined;
  tempCubePosition?: {
    position: ICubePosition;
    cube: ICube | undefined;
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
    this.cubeDataService.currentCubePosition$.subscribe(value => {
      if (this.shrinked) {
        this.assignData(value);
      }
      this.tempCubePosition = value;
    });
  }

  onAnimationEnd(event: AnimationEvent): void {
    if (event.fromState === "grow" && event.toState === "shrink") {
      this.shrinked = true;
      if (this.tempCubePosition) {
        this.assignData(this.tempCubePosition);
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

  assignData(value: { position: ICubePosition; cube: ICube | undefined; }): void {
    this.position = value.position;
    this.cube = value.cube;
  }

  expand(): void {
    this.active = false;
    this.cubeDataService.expandedActive$.next(true);
  }
}