import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CssService {
  scrollingEnabled$ = new BehaviorSubject<boolean>(false);
  topBarFixed: boolean | undefined;
  constructor() { }

  setVirtualWidth(): void {
    document.body.style.setProperty('--virtual-width', `${document.body.clientWidth}px`);
  }
}
