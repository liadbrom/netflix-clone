import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICube } from '../cube/cube.component';
import { CubeDataService } from 'src/app/services/cube-data.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationEvent
} from '@angular/animations';
import { fakeAsync } from '@angular/core/testing';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'hupi-preview-cube',
  templateUrl: './preview-cube.component.html',
  styleUrls: ['./preview-cube.component.scss'],
  animations: [
    trigger('growShrink', [
      state('grow', style({transform: 'scale(1.3)'})),
      state('shrink', style({transform: 'scale(1)'})),
      transition('shrink => grow', animate('150ms')),
      transition('grow => shrink', animate('150ms')),
    ]),
  ],
})
export class PreviewCubeComponent implements OnInit {

  constructor(private cubeDataService: CubeDataService) { }

  cube: ICube | undefined;
  position: IPosition | undefined;
  tempCubePosition?: {
    position: IPosition;
    cube: ICube | undefined;
  }
  @Input() active = false;
  shrinked = true;
  barOpacity = 0;
  transformOrigin = "center";

  ngOnInit(): void {
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
      this.shrinked = false;
      this.barOpacity = 0;
    }
    if (event.fromState === "shrink") {
        this.barOpacity = 1;
    }
  }

  assignData(value: {position: IPosition; cube: ICube | undefined;}): void {
    this.position = value.position;
    this.cube = value.cube;
  }
}

export interface IPosition {
  top: number;
  left: number;
  right: number;
  transformOrigin: string;
}
