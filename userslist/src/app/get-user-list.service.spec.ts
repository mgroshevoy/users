import { TestBed } from '@angular/core/testing';

import { GetUserListService } from './get-user-list.service';

describe('GetUserListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetUserListService = TestBed.get(GetUserListService);
    expect(service).toBeTruthy();
  });
});
