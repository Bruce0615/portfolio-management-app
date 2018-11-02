import { TestBed, inject } from '@angular/core/testing';

import { SwalManagerService } from './swal-manager.service';

describe('SwalManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwalManagerService]
    });
  });

  it('should be created', inject([SwalManagerService], (service: SwalManagerService) => {
    expect(service).toBeTruthy();
  }));
});
