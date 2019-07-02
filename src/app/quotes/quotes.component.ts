import { Component, OnInit } from '@angular/core';
import { Quote } from '../models/Quote';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [];
  selectedQuote: Quote = new Quote();

  constructor(public quoteService: QuoteService) { }

  ngOnInit() {
    // Ovdje ce biti glavno dovlacenje podataka
    this.quoteService.getAllQuotes().subscribe(data => {
      //data je ustvari QUote[] objekat
      this.quotes = data;
    })
  }

}
