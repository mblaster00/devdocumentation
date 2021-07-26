import { DelConsoleComponent } from './delDelivery/delConsole/delConsole.component';
import { DelDeliveryComponent } from './delDelivery/delDelivery.component';
import { PutConsoleComponent } from './putDelivery/putConsole/putConsole.component';
import { PutDeliveryComponent } from './putDelivery/putDelivery.component';
import { GetDeliveryComponent } from './getDelivery/getDelivery.component';
import { RequestConsoleComponent } from './requestDelivery/requestConsole/requestConsole.component';
import { RequestDeliveryComponent } from './requestDelivery/requestDelivery.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryComponent } from './delivery.component';
import { ConsoleComponent } from './getDelivery/console/console.component';

const routes: Routes = [
	{
		path : '',
		component : DeliveryComponent
	},
	{
		path : 'requestDelivery',
		component : RequestDeliveryComponent
	},
	{
		path : 'requestDelivery/console',
		component : RequestConsoleComponent
	},
	{
		path : 'getDelivery',
		component : GetDeliveryComponent
	},
	{
		path : 'getDelivery/console',
		component : ConsoleComponent
	},
	{
		path : 'putDelivery',
		component : PutDeliveryComponent
	},
	{
		path : 'putDelivery/console',
		component : PutConsoleComponent
	},
	{
		path : 'deleteDelivery',
		component : DelDeliveryComponent
	},
	{
		path : 'deleteDelivery/console',
		component : DelConsoleComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
