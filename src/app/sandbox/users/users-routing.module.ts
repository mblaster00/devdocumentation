import { RegisterConsoleComponent } from './register/registerConsole/registerConsole.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { LoginConsoleComponent } from './login/loginConsole/loginConsole.component';
import { ApiKeyComponent } from './apiKey/apiKey.component';
import { ApiKeyConsoleComponent } from './apiKey/apiKeyConsole/apiKeyConsole.component';

const routes: Routes = [
	{
		path : '',
		component : UsersComponent
	},
	{
		path : 'register',
		component : RegisterComponent
	},
	{
		path : 'register/console',
		component : RegisterConsoleComponent
	},
	{
		path : 'login',
		component : LoginComponent
	},
	{
		path : 'login/console',
		component : LoginConsoleComponent
	},
	{
		path : 'apiKey',
		component : ApiKeyComponent
	},
	{
		path : 'apiKey/console',
		component : ApiKeyConsoleComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
