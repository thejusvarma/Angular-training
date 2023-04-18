import { TestBed } from '@angular/core/testing';

import { BlossomService } from './blossom.service';

describe('BlossomService', () => {
  let service: BlossomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlossomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
