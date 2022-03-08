import { Component, Directive, ElementRef, Input, OnInit, Output } from '@angular/core';
import { ICube } from '../cube/cube.component';

@Component({
  selector: 'hupi-cube-controls',
  templateUrl: './cube-controls.component.html',
  styleUrls: ['./cube-controls.component.scss']
})
export class CubeControlsComponent implements OnInit {
  @Input() expanded: boolean = false;
  @Input() cube: ICube | undefined;
  muted = true;

  constructor() { }

  ngOnInit(): void {
  }

  setLike(event: MouseEvent, like: boolean): void {
    event.stopPropagation();
    if (this.cube) {
      this.cube.liked = this.cube.liked === like ? undefined : like;
    }
  }

  toggleAudio(): void {
    this.muted = !this.muted;
  }
}