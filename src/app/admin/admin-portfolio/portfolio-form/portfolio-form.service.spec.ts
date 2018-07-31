import { TestBed, inject } from '@angular/core/testing';

import { PortfolioFormService } from './portfolio-form.service';

describe('PortfolioFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortfolioFormService]
    });
  });

  it('should be created', inject([PortfolioFormService], (service: PortfolioFormService) => {
    expect(service).toBeTruthy();
  }));
});
