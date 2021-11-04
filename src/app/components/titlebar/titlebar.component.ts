import { Component, OnInit } from '@angular/core';
import { ipcRenderer, remote } from 'electron';

@Component({
  selector: 'hupi-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent implements OnInit {

  maximized = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMaximize(): void {
    this.maximized = !this.maximized;
  }
}
