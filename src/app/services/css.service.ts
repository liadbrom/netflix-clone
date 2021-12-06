import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CssService {
  scrollingEnabled$ = new BehaviorSubject<boolean>(false);
  constructor() { }

  setVirtualWidth(): void {
    document.body.style.setProperty('--virtual-width', `${document.body.clientWidth}px`);
  }
}
