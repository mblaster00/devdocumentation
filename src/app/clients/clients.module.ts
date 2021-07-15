import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ClientsComponent,
    SidemenuComponent,
    // ComponentComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    NgbModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClientsModule { }