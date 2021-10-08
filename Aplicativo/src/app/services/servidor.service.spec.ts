import { TestBed } from '@angular/core/testing';

import { ServidorService } from './servidor.service';

describe('ServidorService', () => {
  let service: ServidorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServidorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
