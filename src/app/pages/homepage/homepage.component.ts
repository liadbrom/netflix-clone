import { Component, OnInit } from '@angular/core';
import { IRow } from 'src/app/components/row/row.component';
import { rows } from 'src/app/mock/rows-mock';
import { CubeDataService } from 'src/app/services/cube-data.service';

@Component({
  selector: 'hupi-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  rows: IRow[] = rows;
  introEnabled = true;
  previewActive = false;

  constructor( private cubeDataService: CubeDataService ) {}

  ngOnInit(): void {
    this.enableTestMode();
    this.cubeDataService.previewActive$.subscribe(value => {
      this.previewActive = value;
      console.log("set active as: " + value);
    });
  }

  hidePreview(): void {
    this.cubeDataService.previewActive$.next(false);
  }
  
  enableTestMode(): void{
    setTimeout(() => {
      this.introEnabled = false;
    }, 0);
  }

}
