import { RequestConsoleComponent } from './requestDelivery/requestConsole/requestConsole.component';
import { RequestDeliveryComponent } from './requestDelivery/requestDelivery.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryComponent } from './delivery.component';

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
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
