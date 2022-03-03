import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { Faqs } from 'src/app/model/faqs';
import { FaqsService } from 'src/app/services/faqs.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;
  let faqsService: FaqsService;
  let faqs: Faqs;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AccordionComponent],
      providers: [
        FaqsService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    faqsService = TestBed.inject(FaqsService);
    faqs = new Faqs("1", 'test', 'Lorem ipsum');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('On init faqs should be loaded', fakeAsync(() => {
    spyOn(faqsService, 'getFaqs').and.returnValue(of([faqs]));
    fixture.detectChanges();

    expect(component.faqList).toEqual([]);
    expect(faqsService.getFaqs).toHaveBeenCalledWith();

    tick(1);

    expect(component.faqList).toEqual([faqs]);
  }));

});



