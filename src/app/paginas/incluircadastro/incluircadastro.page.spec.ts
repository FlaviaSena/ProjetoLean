import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncluircadastroPage } from './incluircadastro.page';

describe('IncluircadastroPage', () => {
  let component: IncluircadastroPage;
  let fixture: ComponentFixture<IncluircadastroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IncluircadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
