import { Component, Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'hupi-cube-controls',
  templateUrl: './cube-controls.component.html',
  styleUrls: ['./cube-controls.component.scss']
})
export class CubeControlsComponent implements OnInit {
  @Input() expanded: boolean = false;
  muted = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleAudio(): void {
    this.muted = !this.muted;
  }
}