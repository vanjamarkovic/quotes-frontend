import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from '../models/Quote';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(public http: HttpClient) { }

  public getAllQuotes():Observable<Quote[]> {
    let token = localStorage.getItem('quotes-token'); //uzimanje tokena
    return this.http.get<Quote[]>(`${environment.apiUrl}/quote`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  public getQuoteById(id:number):Observable<Quote> {
    return this.http.get<Quote>(`${environment.apiUrl}/quote/${id}`)
  }

  public createQuote(quote:Quote):Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/quote`, quote);
  }

  public updateQuote(quote:Quote):Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/quote`, quote);
  }

  public deleteQuote(id:number):Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/quote/${id}`);
  }


}
