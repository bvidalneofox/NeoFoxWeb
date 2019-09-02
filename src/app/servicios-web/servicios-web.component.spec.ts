import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosWebComponent } from './servicios-web.component';

describe('ServiciosWebComponent', () => {
  let component: ServiciosWebComponent;
  let fixture: ComponentFixture<ServiciosWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
