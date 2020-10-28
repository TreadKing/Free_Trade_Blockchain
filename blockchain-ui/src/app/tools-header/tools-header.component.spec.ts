import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsHeaderComponent } from './tools-header.component';

describe('ToolsHeaderComponent', () => {
  let component: ToolsHeaderComponent;
  let fixture: ComponentFixture<ToolsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
