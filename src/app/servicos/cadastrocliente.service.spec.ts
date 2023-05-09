import { TestBed } from '@angular/core/testing';

import { CadastroclienteService } from './cadastrocliente.service';

describe('CadastroclienteService', () => {
  let service: CadastroclienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroclienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
