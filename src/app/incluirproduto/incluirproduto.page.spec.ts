import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncluirprodutoPage } from './incluirproduto.page';

describe('IncluirprodutoPage', () => {
  let component: IncluirprodutoPage;
  let fixture: ComponentFixture<IncluirprodutoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IncluirprodutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
