import { TestBed } from '@angular/core/testing';

import { AngService } from './ang.service';

describe('AngService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngService = TestBed.get(AngService);
    expect(service).toBeTruthy();
  });
});
