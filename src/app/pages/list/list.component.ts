import { Location } from '@angular/common';
import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { IRow } from '../../components/row/row.component';
import { rows } from 'src/app/mock/rows-mock';
import { ActivatedRoute, Router } from '@angular/router';
import { CubeDataService } from 'src/app/services/cube-data.service';
import { CssService } from 'src/app/services/css.service';
import { ICube } from 'src/app/components/cube/cube.component';
import { map, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'hupi-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  listType: "browse" | "search" | undefined;
  row?: IRow;
  previewActive = false;
  expandedActive = false;
  constructor(private router: Router, private route: ActivatedRoute, private renderer2: Renderer2, private cubeDataService: CubeDataService, private cssService: CssService) {
    this.cssService.topBarFixed = false;
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.listType = data.result;
      if (this.listType === "search") {
        this.handleSearch() || this.router.navigate(["/"]);
      } else {
        const category = this.listType;
        this.row = rows.filter(row => row.title === category)[0];
      }
    });


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

  handleSearch(): boolean | Subscription {
    const queryParamMap = this.route.snapshot.queryParamMap;
    return (queryParamMap.keys.length === 1 && queryParamMap.get('q') !== null)
      && this.route.queryParams.subscribe(params => {
        const query = params["q"];
        if (query) {
          this.row = {
            cubes: this.getMatchingCubes(rows, query!.toLowerCase()),
            title: query!
          };
        }
      });
  }

  getMatchingCubes(rows: IRow[], searchQuery: string): ICube[] {
    let matchedCubes: ICube[] = [];
    rows.forEach(row => {
      matchedCubes = matchedCubes.concat(row.cubes.filter(cube => {
        return cube.title?.toLowerCase().includes(searchQuery);
      }));
    });
    return matchedCubes;
  }

  hidePreview(): void {
    this.cubeDataService.previewActive$.next(false);
  }

}
