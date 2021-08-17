import { TestBed } from '@angular/core/testing';

import { CubeDataService } from './cube-data.service';

describe('CubePositionService', () => {
  let service: CubeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CubeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
