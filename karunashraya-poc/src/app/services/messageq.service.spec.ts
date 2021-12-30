import { TestBed } from '@angular/core/testing';

import { MessageqService } from './messageq.service';

describe('MessageqService', () => {
  let service: MessageqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
