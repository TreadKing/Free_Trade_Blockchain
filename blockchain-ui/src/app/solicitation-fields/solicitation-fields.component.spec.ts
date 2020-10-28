import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitationFieldsComponent } from './solicitation-fields.component';

describe('SolicitationFieldsComponent', () => {
  let component: SolicitationFieldsComponent;
  let fixture: ComponentFixture<SolicitationFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitationFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
