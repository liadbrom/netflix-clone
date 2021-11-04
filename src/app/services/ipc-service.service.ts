import { Injectable } from '@angular/core';
import { IpcRenderer, ipcRenderer } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class IpcServiceService {

  private ipc = ipcRenderer;
  constructor() {
    if ((window as any).require) {
      try {
        this.ipc = (window as any).require('electron').ipcRenderer;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('Electron IPC was not loaded');
    }
  }

  public on(channel: string, listener: any): void {
    if (!this.ipc) {
      return;
    }

    this.ipc.on(channel, listener);
  }

  public send(channel: string): void {
    if (!this.ipc) {
      return;
    }
    this.ipc.send(channel);

  }
}
