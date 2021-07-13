import { RequestConsoleComponent } from './requestQuote/requestConsole/requestConsole.component';
import { RequestQuoteComponent } from './requestQuote/requestQuote.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotationsComponent } from './quotations.component';

const routes: Routes = [
	{
		path : '',
		component : QuotationsComponent
	},
	{
		path : 'requestQuote',
		component : RequestQuoteComponent
	},
	{
		path : 'requestQuote/console',
		component : RequestConsoleComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotationsRoutingModule { }
