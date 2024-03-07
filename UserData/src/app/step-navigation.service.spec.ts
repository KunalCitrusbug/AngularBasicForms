import { TestBed } from '@angular/core/testing';

import { StepNavigationService } from './step-navigation.service';

describe('StepNavigationService', () => {
  let service: StepNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
