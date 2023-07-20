import { TestBed } from '@angular/core/testing';

import { ServFunctionsService } from './serv-functions.service';

describe('ServFunctionsService', () => {
  let service: ServFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
