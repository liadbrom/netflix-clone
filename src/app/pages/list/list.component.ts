import { Component, OnInit, Renderer2 } from '@angular/core';
import { IRow } from '../../components/row/row.component';
import { rows } from 'src/app/mock/rows-mock';
import { ActivatedRoute, Router } from '@angular/router';
import { CubeDataService } from 'src/app/services/cube-data.service';

@Component({
  selector: 'hupi-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  row?: IRow;
  previewActive = false;
  expandedActive = false;
  constructor(private route: ActivatedRoute, private router: Router, private renderer2: Renderer2, private cubeDataService: CubeDataService) { }

  ngOnInit(): void {
    const category: string | null = this.route.snapshot.paramMap.get('category');
    this.row = rows.filter(row => row.title === category)[0];
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

  hidePreview(): void {
    this.cubeDataService.previewActive$.next(false);
  }

}
