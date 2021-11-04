import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
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
      // state('shrinked', style({
      //   transform: 'scale({{scale}}) translateY({{translateY}})',
      //   left: "{{left}}px",
      //   top: "{{top}}px",
      //   width: "var(--cube-width)",
      //   fontSize: "5px",
      //   transformOrigin: "{{transformOrigin}}"
      // }), { params: { top: 0, left: 0, transformOrigin: "center", scale: 1, translateY: 0, opacity: 1 } }),
      // state('expanded', style({
      //   transformOrigin: 'left top',
      //   transform: 'scale({{scale}}) translateX(-50%)',
      //   width: 'calc(850px / {{scale}})',
      //   maxWidth: 'calc(90vw / {{scale}})',
      //   fontSize: "16px",
      //   top: '2em',
      //   left: '50%',
      // }), { params: { scale: 1 } }),
      state('shrinked', style({
        transformOrigin: "top left",
        transform: 'scale({{scale}}) translateX(calc(-50% * {{transformFactor}}))',
        left: "calc({{left}}px + calc({{transformFactor}} * 0.5 * var(--cube-width)))",
        top: "{{top}}",
      }), { params: { top: 0, left: 0, transformFactor: 0, scale: 1, opacity: 1 } }),
      state('expanded', style({
        transformOrigin: 'top left',
        transform: 'scale(1) translateX(-50%)',
        top: '2em',
        left: '50%',
      }), { params: { scale: 1 } }),
      transition('shrinked => expanded', animate('350ms ease-out')),
      transition('expanded => shrinked', animate('300ms ease-out')),
    ]),
  ],
})
export class ExpandedCubeComponent implements OnInit {

  @ViewChild('modalWrapper', { static: true }) modal: ElementRef | undefined;
  @ViewChild('modalContainer', { static: true }) modalContainer: ElementRef | undefined;
  modalElement: HTMLElement | undefined;
  // _active = false; DELETE
  cube: ICube | undefined;
  position: ICubePosition = {
    previewTop: 0,
    expandedTop: 0,
    left: 0,
    right: 0,
    transformOrigin: "top",
    transformFactor: 1,
    baseWidth: 0
  };
  backgroundColor: string | undefined;
  lastCubePosition?: {
    position: ICubePosition;
    cube: ICube | undefined;
  }
  @Input() active: boolean = false;
  shrinked = true;
  itemsFilterOpen = false;

  constructor(public cubeDataService: CubeDataService) {
  }

  ngOnInit(): void {
    this.cubeDataService.currentCubeData$.subscribe(value => {
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
      if (this.modal) {
        this.modal.nativeElement.scroll(0, 0);
      }
    }
  }

  assignData(value: { position: ICubePosition; cube: ICube | undefined; }): void {
    this.position = value.position;
    this.cube = value.cube;
  }

  close(): void {
    this.shrinked = false;
  }

  getAnimationParams(): any {
    let modalWidth = Math.min(0.9 * document.body.clientWidth, 850);
    return {
      top: this.shrinked ? `calc((-0.75 * var(--cube-height)) + ${this.position?.expandedTop}px)` : this.position?.expandedTop + "px",
      left: this.position?.left,
      transformFactor: this.position?.transformFactor,
      scale: this.shrinked ? (this.position?.baseWidth * 1.5 / modalWidth) : (this.position?.baseWidth / modalWidth),
      opacity: this.shrinked ? 1 : 0
    }
  }

  toggleItemsFilter(): void {
    this.itemsFilterOpen = !this.itemsFilterOpen;
  }
}