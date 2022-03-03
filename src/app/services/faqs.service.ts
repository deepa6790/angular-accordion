import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Faqs } from '../model/faqs'

@Injectable({
  providedIn: 'root'
})
export class FaqsService {
  private jsonUrl: string = 'assets/data/faqs.json';
  constructor(private http: HttpClient) {


  }
  public getFaqs(): Observable<Faqs[]> {
    console.log('test');
    console.log(this.http.get<Faqs[]>(this.jsonUrl))
    return this.http.get<Faqs[]>(this.jsonUrl);

  }

}
