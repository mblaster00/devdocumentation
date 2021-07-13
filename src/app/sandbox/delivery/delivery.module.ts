import { RequestConsoleComponent } from './requestDelivery/requestConsole/requestConsole.component';
import { RequestDeliveryComponent } from './requestDelivery/requestDelivery.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryComponent } from './delivery.component';

@NgModule({
  declarations: [
    DeliveryComponent, 
    RequestDeliveryComponent, 
    RequestConsoleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DeliveryRoutingModule
  ]
})
export class DeliveryModule { }