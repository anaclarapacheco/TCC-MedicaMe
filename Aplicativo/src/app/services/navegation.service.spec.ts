import { TestBed } from '@angular/core/testing';

import { NavegationService } from './navegation.service';

describe('NavegationService', () => {
  let service: NavegationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavegationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
