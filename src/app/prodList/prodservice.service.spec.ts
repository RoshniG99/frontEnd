/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProdserviceService } from './prodservice.service';

describe('Service: Prodservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdserviceService]
    });
  });

  it('should ...', inject([ProdserviceService], (service: ProdserviceService) => {
    expect(service).toBeTruthy();
  }));
});
