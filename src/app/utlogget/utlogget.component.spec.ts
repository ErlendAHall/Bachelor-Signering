import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtloggetComponent } from './utlogget.component';

describe('UtloggetComponent', () => {
  let component: UtloggetComponent;
  let fixture: ComponentFixture<UtloggetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtloggetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtloggetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
