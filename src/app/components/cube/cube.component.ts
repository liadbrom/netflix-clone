import { Component, Input, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { IItem } from '../item/item.component';

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
  title?: string;
  items?: IItem[];
  height?: string;
  width?: string;
}