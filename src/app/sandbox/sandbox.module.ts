import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTreeModule} from '@angular/material/tree'; 

import { PatientsRoutingModule } from './sandbox-routing.module';

import { PatientsComponent } from './sandbox.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    PatientsComponent,
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    NgbModule,
    MatTreeModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PatientsModule { }
