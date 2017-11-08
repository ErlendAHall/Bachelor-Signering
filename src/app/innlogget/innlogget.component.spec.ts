import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnloggetComponent } from './innlogget.component';

describe('InnloggetComponent', () => {
  let component: InnloggetComponent;
  let fixture: ComponentFixture<InnloggetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnloggetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnloggetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
