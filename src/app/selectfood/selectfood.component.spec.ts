import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectfoodComponent } from './selectfood.component';

describe('SelectfoodComponent', () => {
  let component: SelectfoodComponent;
  let fixture: ComponentFixture<SelectfoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectfoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
