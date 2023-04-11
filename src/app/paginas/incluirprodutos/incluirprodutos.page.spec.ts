import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncluirprodutosPage } from './incluirprodutos.page';

describe('IncluirprodutosPage', () => {
  let component: IncluirprodutosPage;
  let fixture: ComponentFixture<IncluirprodutosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IncluirprodutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
