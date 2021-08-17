import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { CubeDataService } from 'src/app/services/cube-data.service';
import { ICube } from '../cube/cube.component';
import { ICubePosition } from 'src/app/services/cube-data.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationEvent,
  animation,
} from '@angular/animations'; 

@Component({
  selector: 'hupi-expanded-cube',
  templateUrl: './expanded-cube.component.html',
  styleUrls: ['./expanded-cube.component.scss'],
  animations: [
    trigger('expand', [
      state('shrinked', style({
        transform: 'scale({{scale}}) translateY({{translateY}})',
        left: "{{left}}px",
        top: "{{top}}px",
        transformOrigin: "{{transformOrigin}}"
      }), {params: {top: 0, left: 0, transformOrigin:"center", scale: 1, translateY: 0, opacity: 1}}),
      state('expanded', style({
        transformOrigin: 'left top',
        transform: 'scale(2.6) translateX(-50%)',
        top: '3vh',
        left: '50%',
      })),
      transition('shrinked => expanded', animate('350ms ease-out')),
      transition('expanded => shrinked', animate('300ms ease-out')),
    ]),
  ],
})
export class ExpandedCubeComponent implements OnInit {

  _active = false;
  cube: ICube | undefined;
  position: ICubePosition = {
    top: 0,
    left: 0,
    right: 0,
    transformOrigin: ""
  };
  backgroundColor: string | undefined;
  lastCubePosition?: {
    position: ICubePosition;
    cube: ICube | undefined;
  }
  @Input() active: boolean = false;
  shrinked = true;

  constructor(public cubeDataService: CubeDataService) { }

  ngOnInit(): void {
      this.cubeDataService.currentCubePosition$.subscribe(value => {
      this.lastCubePosition = value;
      this.assignData(value);
    });
  }

  onAnimationEnd(event: AnimationEvent): void {
    if (event.fromState === "expanded" && event.toState === "shrinked") {
      this.cubeDataService.expandedActive$.next(false);
      this.shrinked = true;
    }
  }

  onAnimationStart(event: AnimationEvent): void {
    if (event.fromState === "expanded") {
      this.shrinked = false;
      console.log(this.position.top);
    }
  }

  assignData(value: {position: ICubePosition; cube: ICube | undefined;}): void {
    this.position = value.position;
    this.cube = value.cube;
  }

  close(): void {
    this.shrinked = false;
  }
}