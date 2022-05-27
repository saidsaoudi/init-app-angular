import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimisationColisComponent } from './optimisation.component';

describe('OptimisationColisComponent', () => {
  let component: OptimisationColisComponent;
  let fixture: ComponentFixture<OptimisationColisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptimisationColisComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptimisationColisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
