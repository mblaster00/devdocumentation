import { RegisterConsoleComponent } from './register/registerConsole/registerConsole.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { LoginConsoleComponent } from './login/loginConsole/loginConsole.component';
import { ApiKeyComponent } from './apiKey/apiKey.component';
import { ApiKeyConsoleComponent } from './apiKey/apiKeyConsole/apiKeyConsole.component';

@NgModule({
  declarations: [
    UsersComponent, 
    RegisterComponent, 
    RegisterConsoleComponent,
    LoginComponent,
    LoginConsoleComponent,
    ApiKeyComponent,
    ApiKeyConsoleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
