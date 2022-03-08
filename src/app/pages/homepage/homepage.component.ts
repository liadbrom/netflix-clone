import { Component, OnInit, Renderer2 } from '@angular/core';
import { IRow } from 'src/app/components/row/row.component';
import { rows } from 'src/app/mock/rows-mock';
import { CssService } from '../../services/css.service';
import { CubeDataService } from 'src/app/services/cube-data.service';

@Component({
  selector: 'hupi-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  rows: IRow[] = rows;
  previewActive = false;
  expandedActive = false;

  constructor(private renderer2: Renderer2, private cubeDataService: CubeDataService, private cssService: CssService) { }

  ngOnInit(): void {
    this.subscribeToCubeData();
  }

  hidePreview(): void {
    this.cubeDataService.previewActive$.next(false);
  }

  subscribeToCubeData(): void {
    this.cubeDataService.previewActive$.subscribe(value => {
      this.previewActive = value;
    });
    this.cubeDataService.expandedActive$.subscribe(value => {
      this.expandedActive = value;
      this.cssService.scrollingEnabled$.next(!this.expandedActive);
    });
  }
}
