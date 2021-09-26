import { Component, OnInit, Renderer2 } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
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
  expandedActive = false;

  constructor(private renderer2: Renderer2, private cubeDataService: CubeDataService) { }

  ngOnInit(): void {
    this.enableTestMode();
    if (sessionStorage.getItem("firstVisit") === "false") {
      this.introEnabled = false;
    } else {
      sessionStorage.setItem("firstVisit", "false")
    }
    this.cubeDataService.previewActive$.subscribe(value => {
      this.previewActive = value;
    });
    this.cubeDataService.expandedActive$.subscribe(value => {
      this.expandedActive = value;
      if (this.expandedActive) {
        this.renderer2.addClass(document.body, 'hidden-scrollbar');
      } else {
        this.renderer2.removeClass(document.body, 'hidden-scrollbar');
      }
    });
  }

  ngAfterContentInit(): void {

  }

  hidePreview(): void {
    this.cubeDataService.previewActive$.next(false);
  }

  enableTestMode(): void {
    setTimeout(() => {
      this.introEnabled = false;
    }, 0);
  }

}
