import { Component, OnInit } from '@angular/core';
import { Faqs } from 'src/app/model/faqs';
import { FaqsService } from '../../services/faqs.service';
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  faqList = new Array<Faqs>();
  isShow: any;
  constructor(private faqsService: FaqsService) {
    this.isShow = {};
  }

  ngOnInit(): void {
    this.faqsService.getFaqs().subscribe(response => {
      this.faqList = response;
      this.faqList = response.map(item => {
        return new Faqs(
          item.id,
          item.question,
          item.answer
        );
      });

    });

    this.faqList.forEach(item => {
      this.isShow[item.id] = false;
    });

  }
  showAnswer(faq: any) {
    Object.keys(this.isShow).forEach(item => {
      this.isShow[item] = false;
    });
    this.isShow[faq.id] = true;
  }
  hideAnswer(faq: any) {
    this.isShow[faq.id] = false;
  }

}
