import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hupi-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent implements OnInit {

  @Input() cube: ICube | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface ICube {
  imgSrc?: string;
  height?: string;
  width?: string;
}