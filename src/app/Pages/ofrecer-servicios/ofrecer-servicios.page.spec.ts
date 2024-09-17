import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfrecerServiciosPage } from './ofrecer-servicios.page';

describe('OfrecerServiciosPage', () => {
  let component: OfrecerServiciosPage;
  let fixture: ComponentFixture<OfrecerServiciosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OfrecerServiciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
