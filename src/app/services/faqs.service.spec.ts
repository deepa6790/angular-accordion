import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FaqsService } from './faqs.service';
import { Faqs } from '../model/faqs';

describe('FaqsService', () => {
  let service: FaqsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FaqsService]
    });

    service = TestBed.inject(FaqsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should fetch faqs from the json file', () => {
    const sampleFaqs: Faqs[] = [{
      "id": "1",
      "question": "What vehicles are covered?",
      "answer": "Lorem ipsum dolor sit amet",
    }, {
      "id": "2",
      "question": "What vehicles are covered?",
      "answer": "Lorem ipsum dolor sit amet",
    }];
    service.getFaqs().subscribe(faqs => {
      expect(faqs.length).toBe(2);
      expect(faqs).toEqual(sampleFaqs);
    });
  });
});
