import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTreeModule} from '@angular/material/tree'; 

import { SandboxRoutingModule } from './sandbox-routing.module';

import { SandboxComponent } from './sandbox.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    SandboxComponent,
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    SandboxRoutingModule,
    NgbModule,
    MatTreeModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SandboxModule { }
