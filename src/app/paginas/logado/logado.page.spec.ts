import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogadoPage } from './logado.page';

describe('LogadoPage', () => {
  let component: LogadoPage;
  let fixture: ComponentFixture<LogadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
