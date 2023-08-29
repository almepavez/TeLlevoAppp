import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoCargandoPage } from './logo-cargando.page';

describe('LogoCargandoPage', () => {
  let component: LogoCargandoPage;
  let fixture: ComponentFixture<LogoCargandoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogoCargandoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
