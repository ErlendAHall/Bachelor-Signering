import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MenyComponent } from './meny.component';

TestBed.configureTestingModule({
  imports: [RouterTestingModule],
  declarations: [MenyComponent],
});

describe('MenyComponent', () => {
  let component: MenyComponent;
  let fixture: ComponentFixture<MenyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
