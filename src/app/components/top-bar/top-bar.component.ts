import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'hupi-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  focused = false;
  @ViewChild('searchInput') searchInput: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSearchClick(): void {
    this.focused = true;
    this.searchInput?.nativeElement.focus();
  }

  onSearchBlur(): void {
    if (!this.searchInput?.nativeElement.value) {
      this.focused = false;
    }
  }
}
