import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlossomComponent } from './blossom.component';

describe('BlossomComponent', () => {
  let component: BlossomComponent;
  let fixture: ComponentFixture<BlossomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlossomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlossomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
