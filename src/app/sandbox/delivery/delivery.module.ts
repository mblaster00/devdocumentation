import { GetDeliveryComponent } from './getDelivery/getDelivery.component';
import { RequestConsoleComponent } from './requestDelivery/requestConsole/requestConsole.component';
import { RequestDeliveryComponent } from './requestDelivery/requestDelivery.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryComponent } from './delivery.component';
import { ConsoleComponent } from './getDelivery/console/console.component';
import { PutDeliveryComponent } from './putDelivery/putDelivery.component';
import { PutConsoleComponent } from './putDelivery/putConsole/putConsole.component';
import { DelDeliveryComponent } from './delDelivery/delDelivery.component';
import { DelConsoleComponent } from './delDelivery/delConsole/delConsole.component';
import { FilterDeliveryComponent } from './filterDelivery/filterDelivery.component';
import { FilterConsoleComponent } from './filterDelivery/requestConsole/filterConsole.component';

@NgModule({
  declarations: [
    DeliveryComponent, 
    RequestDeliveryComponent, 
    RequestConsoleComponent,
    GetDeliveryComponent,
    ConsoleComponent,
    FilterDeliveryComponent,
    FilterConsoleComponent,
    PutDeliveryComponent,
    PutConsoleComponent,
    DelDeliveryComponent,
    DelConsoleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DeliveryRoutingModule
  ]
})
export class DeliveryModule { }