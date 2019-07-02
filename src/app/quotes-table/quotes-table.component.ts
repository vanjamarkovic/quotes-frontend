import { Component, OnInit, Input, Host } from '@angular/core';
import { Quote } from '../models/Quote';
import { QuotesComponent } from '../quotes/quotes.component';

@Component({
  selector: 'app-quotes-table',
  templateUrl: './quotes-table.component.html',
  styleUrls: ['./quotes-table.component.scss']
})
export class QuotesTableComponent implements OnInit {

  @Input("quotes")
  quotes: Quote[];

  title: string = 'Tabela Quote objekata';

  constructor(@Host() public parent:QuotesComponent) { }

  ngOnInit() {
  }

  rowClick(quote: Quote){
    //alert(quote.quoteText);
    this.parent.selectedQuote = quote;
  }

}
