import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasededatosPage } from './basededatos.page';

describe('BasededatosPage', () => {
  let component: BasededatosPage;
  let fixture: ComponentFixture<BasededatosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BasededatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
