import { TestBed } from '@angular/core/testing';

import { ArrayServersService } from './array-servers.service';

describe('ArrayServersService', () => {
  let service: ArrayServersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayServersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
