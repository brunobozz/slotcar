import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ServSocketioService } from './serv-socketio.service';

describe('ServSocketioService', () => {
  let service: ServSocketioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ServSocketioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
