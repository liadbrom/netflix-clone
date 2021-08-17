import { Component, OnInit } from '@angular/core';
import { CssService } from './services/css.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hupix';

  constructor(private cssService: CssService) { }

  ngOnInit(): void {
    window.addEventListener('resize', this.cssService.setVirtualWidth);
  }

}
