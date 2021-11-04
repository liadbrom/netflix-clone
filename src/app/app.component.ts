import { Component, OnInit } from '@angular/core';
import { CssService } from './services/css.service';
import { CubeDataService } from './services/cube-data.service';
import { Event, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hupix';

  constructor(private cssService: CssService, private cubeDataService: CubeDataService, private router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.cubeDataService.expandedActive$.next(false);
        this.cubeDataService.previewActive$.next(false);
      }
    });

  }

  ngOnInit(): void {
    window.addEventListener('resize', this.cssService.setVirtualWidth);
  }

}
