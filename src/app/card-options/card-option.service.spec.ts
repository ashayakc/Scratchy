import { TestBed } from '@angular/core/testing';

import { CardOptionService } from './card-option.service';

describe('CardOptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardOptionService = TestBed.get(CardOptionService);
    expect(service).toBeTruthy();
  });
});
