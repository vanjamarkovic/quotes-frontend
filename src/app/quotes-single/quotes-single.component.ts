import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../models/Quote';
import { QuoteService } from '../services/quote.service';

import { environment } from '../../environments/environment';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-quotes-single',
  templateUrl: './quotes-single.component.html',
  styleUrls: ['./quotes-single.component.scss']
})
export class QuotesSingleComponent implements OnInit {

  @Input("quote")
  quote: Quote = new Quote();

  @Input('isViewMode')
  isViewMode: boolean = false;

  uploader: FileUploader = new FileUploader({
    url: `${environment.apiUrl}/upload`,
    itemAlias: 'img'
  })

  apiUrl: string = environment.apiUrl;

  constructor(public quoteService: QuoteService) {
    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false}
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      response = JSON.parse(response);
      if (response.status == 0) {
        this.quote.imagePath = response.filename;
        this.quoteService.createQuote(this.quote).subscribe(data => {
          console.log(data);
          alert("Quote unesen!");
          this.quote = new Quote();
        })
      }
    }
  }

  ngOnInit() {
  }

  insertQuote(){
    if(confirm("Da li ste sigurni")) {
      this.uploader.uploadAll(); //pokrece upload
    }
  }

}
