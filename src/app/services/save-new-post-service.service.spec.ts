import { TestBed } from '@angular/core/testing';

import { SaveNewPostServiceService } from './save-new-post-service.service';

describe('SaveNewPostServiceService', () => {
  let service: SaveNewPostServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveNewPostServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
