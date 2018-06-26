import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderMainComponentComponent } from './under-main-component.component';

describe('UnderMainComponentComponent', () => {
  let component: UnderMainComponentComponent;
  let fixture: ComponentFixture<UnderMainComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderMainComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
