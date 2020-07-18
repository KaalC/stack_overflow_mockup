import { TestBed } from '@angular/core/testing';

import { StackoverflowApiService } from './stackoverflow-api.service';

describe('StackoverflowApiService', () => {
  let service: StackoverflowApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StackoverflowApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
