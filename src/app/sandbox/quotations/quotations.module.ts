import { RequestConsoleComponent } from './requestQuote/requestConsole/requestConsole.component';
import { RequestQuoteComponent } from './requestQuote/requestQuote.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuotationsRoutingModule } from './quotations-routing.module';
import { QuotationsComponent } from './quotations.component';
import { GetQuoteComponent } from './getQuote/getQuote.component';
import { GetConsoleComponent } from './getQuote/getConsole/getConsole.component';
import { PutQuoteComponent } from './putQuote/putQuote.component';
import { PutConsoleComponent } from './putQuote/putConsole/putConsole.component';
import { DelQuoteComponent } from './delQuote/delQuote.component';
import { DelConsoleComponent } from './delQuote/delConsole/delConsole.component';

@NgModule({
  declarations: [
    QuotationsComponent, 
    RequestQuoteComponent, 
    RequestConsoleComponent,
    GetQuoteComponent, 
    GetConsoleComponent,
    PutQuoteComponent, 
    PutConsoleComponent,
    DelQuoteComponent, 
    DelConsoleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    QuotationsRoutingModule
  ]
})
export class QuotationsModule { }