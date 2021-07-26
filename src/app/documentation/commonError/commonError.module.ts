import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonErrorRoutingModule } from './commonError-routing.module';
import { CommonErrorComponent } from './commonError.component';


@NgModule({
  declarations: [CommonErrorComponent],
  imports: [
    CommonModule,
    CommonErrorRoutingModule
  ]
})
export class CommonErrorModule { }
