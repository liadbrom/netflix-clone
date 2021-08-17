import { Component, Input, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hupi-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent implements OnInit {

  @Input() cube: ICube | undefined;
  @Input() isPreviewCube = false;

  constructor(private hostElement: ElementRef) { }

  ngOnInit(): void {
  }

}

export interface ICube {
  imgSrc?: string;
  tags?: Array<String>;
  metaData?: Object;
  description?: string;
  height?: string;
  width?: string;
}