import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DocumentationComponent,
    SidemenuComponent,
    // ComponentComponent
  ],
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    NgbModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DocumentationModule { }