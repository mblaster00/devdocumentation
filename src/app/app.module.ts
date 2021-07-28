import { UsersService } from 'src/services/users.service';
import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./common/header/header.component";
import { FooterComponent } from "./common/footer/footer.component";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ToastrModule } from "ngx-toastr";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { Daterangepicker } from "ng2-daterangepicker";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { LinkService } from "./link.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from "./interceptor/token.interceptor";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule,
    ToastrModule.forRoot(),
    HttpClientInMemoryWebApiModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    Daterangepicker,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [LinkService, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}