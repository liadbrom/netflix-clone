import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hupix';

  ngOnInit(): void {
    this.applyVW();
    setTimeout(() => {
      this.applyVW();
      window.addEventListener('resize', this.applyVW);
    }, 0);
  }

  applyVW(): void {
    document.body.style.setProperty('--virtual-width', `${document.body.getBoundingClientRect().width}px`);
  }


}
