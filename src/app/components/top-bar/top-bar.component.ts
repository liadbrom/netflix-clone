import { Component, OnInit, ViewChild, ElementRef, Input, OnDestroy } from '@angular/core';
import { fromEvent, Subject, timer } from 'rxjs';
import { debounce, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'hupi-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  focused = false;
  @ViewChild('searchInput') searchInput: ElementRef | undefined;
  @Input() fixed = false;
  destroy$ = new Subject<void>();
  solid = false;
  transitionDebounceTime = 0;

  constructor() { }

  ngOnInit(): void {
    const scroll$ = fromEvent(document.body, 'scroll');
    scroll$.pipe(
      debounce(() => timer(this.transitionDebounceTime)),
    ).subscribe(() => {
      let scrollTop = !!document.body.scrollTop;
      this.solid = scrollTop;
      this.transitionDebounceTime = scrollTop ? 100 : 0;
    });
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
