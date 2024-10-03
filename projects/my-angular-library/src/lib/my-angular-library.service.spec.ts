import { TestBed } from '@angular/core/testing';

import { MyAngularLibraryService } from './my-angular-library.service';

describe('MyAngularLibraryService', () => {
  let service: MyAngularLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAngularLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
