import { TestBed } from '@angular/core/testing';

import { CadidatoService } from './cadidato.service';

describe('CadidatoService', () => {
  let service: CadidatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadidatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
