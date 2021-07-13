import { RequestConsoleComponent } from './requestQuote/requestConsole/requestConsole.component';
import { RequestQuoteComponent } from './requestQuote/requestQuote.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuotationsRoutingModule } from './quotations-routing.module';
import { QuotationsComponent } from './quotations.component';

@NgModule({
  declarations: [
    QuotationsComponent, 
    RequestQuoteComponent, 
    RequestConsoleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    QuotationsRoutingModule
  ]
})
export class QuotationsModule { }