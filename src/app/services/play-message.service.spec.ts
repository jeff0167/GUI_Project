import { TestBed } from '@angular/core/testing';

import { PlayMessageService } from './play-message.service';

describe('PlayMessageService', () => {
  let service: PlayMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
