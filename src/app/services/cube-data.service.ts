import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { ICube } from '../components/cube/cube.component';
import { IPosition } from '../components/preview-cube/preview-cube.component';

@Injectable({
  providedIn: 'root'
})
export class CubeDataService {
  previewActive$ = new BehaviorSubject<boolean>(false);
  currentCubePosition$ = new Subject<{position: IPosition, cube: ICube | undefined}>();
  constructor() { }
  setData(position: IPosition, cube: ICube | undefined): void {
    this.currentCubePosition$.next({position, cube});
  }
}
