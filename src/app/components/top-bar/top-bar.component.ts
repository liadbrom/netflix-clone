import { Location } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { fromEvent, Subject, timer } from 'rxjs';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent';
import { debounce } from 'rxjs/operators';

@Component({
  selector: 'hupi-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  focused = false;
  @ViewChild('searchInput') searchInput: ElementRef | undefined;
  @Input() fixed = false;
  appRoot = document.getElementById("app-root");
  destroy$ = new Subject<void>();
  solid = false;
  transitionDebounceTime = 0;
  prevRoute = "/";

  constructor(private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    const scroll$ = fromEvent(this.appRoot as FromEventTarget<Event>, 'scroll');
    scroll$.pipe(
      debounce(() => timer(this.transitionDebounceTime)),
    ).subscribe(() => {
      let scrollTop = !!this.appRoot?.scrollTop;
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

  search(event: any): void {
    const searchPath = "/search";
    const searchQuery = event?.target?.value;
    if (this.router.url.indexOf(searchPath) !== 0) {
      this.prevRoute = decodeURI(this.router.url);
      this.router.navigate(["/search"]).then(() => this.setQueryParams(searchQuery));
    } else {
      this.setQueryParams(searchQuery);
    }
  }

  setQueryParams(searchQuery: string): void {
    const queryParams: Params = { q: searchQuery };
    if (searchQuery === "") {
      this.router.navigate([this.prevRoute]);
    } else {
      this.router.navigate([], { relativeTo: this.route, queryParams: queryParams, replaceUrl: true });
    }
  }
}
