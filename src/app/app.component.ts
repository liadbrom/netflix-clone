import { Component, ElementRef, OnInit } from '@angular/core';
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

  constructor(private cssService: CssService, private cubeDataService: CubeDataService, private router: Router, private hostElement: ElementRef) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.cubeDataService.expandedActive$.next(false);
        this.cubeDataService.previewActive$.next(false);
      }
    });
    cssService.scrollingEnabled$.subscribe(value => {
      console.log(value);
      if (value) {
        this.hostElement.nativeElement.classList.remove("hidden-scrollbar");
      } else {
        this.hostElement.nativeElement.classList.add("hidden-scrollbar");
      }
    });
  }

  ngOnInit(): void {
    window.addEventListener('resize', this.cssService.setVirtualWidth);
  }

}
