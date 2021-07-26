import { DelConsoleComponent } from './delQuote/delConsole/delConsole.component';
import { DelQuoteComponent } from './delQuote/delQuote.component';
import { PutConsoleComponent } from './putQuote/putConsole/putConsole.component';
import { PutQuoteComponent } from './putQuote/putQuote.component';
import { RequestConsoleComponent } from './requestQuote/requestConsole/requestConsole.component';
import { RequestQuoteComponent } from './requestQuote/requestQuote.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotationsComponent } from './quotations.component';
import { GetQuoteComponent } from './getQuote/getQuote.component';
import { GetConsoleComponent } from './getQuote/getConsole/getConsole.component';

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
	},
	{
		path : 'getQuote',
		component : GetQuoteComponent
	},
	{
		path : 'getQuote/console',
		component : GetConsoleComponent
	},
	{
		path : 'putQuote',
		component : PutQuoteComponent
	},
	{
		path : 'putQuote/console',
		component : PutConsoleComponent
	},
	{
		path : 'deleteQuote',
		component : DelQuoteComponent
	},
	{
		path : 'deleteQuote/console',
		component : DelConsoleComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotationsRoutingModule { }
