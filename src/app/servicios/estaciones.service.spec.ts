import { TestBed } from '@angular/core/testing';

import { EstacionesService } from './estaciones.service';

describe('EstacionesService', () => {
  let service: EstacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
