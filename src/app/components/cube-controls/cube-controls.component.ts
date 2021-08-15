import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hupi-cube-controls',
  templateUrl: './cube-controls.component.html',
  styleUrls: ['./cube-controls.component.scss']
})
export class CubeControlsComponent implements OnInit {
  @Input() expanded: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
