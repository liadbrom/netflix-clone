import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { ICube } from '../components/cube/cube.component';

@Injectable({
  providedIn: 'root'
})
export class CubeDataService {
  previewActive$ = new BehaviorSubject<boolean>(false);
  expandedActive$ = new BehaviorSubject<boolean>(false);
  currentCubePosition$ = new Subject<{position: ICubePosition, cube: ICube | undefined}>();
  constructor() { }
  setData(position: ICubePosition, cube: ICube | undefined): void {
    this.currentCubePosition$.next({position, cube});
  }
}

export interface ICubePosition {
  previewTop: number;
  expandedTop: number;
  left: number;
  right: number;
  transformOrigin: string;
}

