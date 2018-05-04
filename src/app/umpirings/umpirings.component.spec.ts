import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmpiringsComponent } from './umpirings.component';

describe('UmpiringsComponent', () => {
  let component: UmpiringsComponent;
  let fixture: ComponentFixture<UmpiringsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmpiringsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmpiringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
