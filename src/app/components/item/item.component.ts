import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hupi-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: IItem | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface IItem {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  type: string;
}