import { TestBed } from '@angular/core/testing';

import { LaSiesteService } from './la-sieste.service';

describe('LaSiesteService', () => {
  let service: LaSiesteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaSiesteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
