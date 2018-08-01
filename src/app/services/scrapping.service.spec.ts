import { TestBed, inject } from '@angular/core/testing';

import { ScrappingService } from './scrapping.service';

describe('ScrappingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrappingService]
    });
  });

  it('should be created', inject([ScrappingService], (service: ScrappingService) => {
    expect(service).toBeTruthy();
  }));
});
