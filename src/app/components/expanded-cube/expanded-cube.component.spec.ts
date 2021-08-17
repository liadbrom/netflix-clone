import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedCubeComponent } from './expanded-cube.component';

describe('ExpandedCubeComponent', () => {
  let component: ExpandedCubeComponent;
  let fixture: ComponentFixture<ExpandedCubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandedCubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandedCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
