import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CssService {

  constructor() { }

  setVirtualWidth(): void {
    document.body.style.setProperty('--virtual-width', `${document.body.getBoundingClientRect().width}px`);
  }
}
