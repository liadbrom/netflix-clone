import { Component, OnInit } from '@angular/core';
import { IRow } from 'src/app/components/row/row.component';
import { rows } from 'src/app/mock/rows-mock';

@Component({
  selector: 'hupi-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  rows: IRow[] = rows;

  constructor() { }

  ngOnInit(): void {
  }

}
