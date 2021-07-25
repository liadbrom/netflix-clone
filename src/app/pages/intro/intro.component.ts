import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'hupi-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {

  @Output() ended = new EventEmitter<boolean>();

  constructor() {
  }

  onEnd(): void {
    this.ended.emit(false);
  }

}
