import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonErrorComponent } from './commonError.component';

const routes: Routes = [
	{
		path : '',
		component : CommonErrorComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonErrorRoutingModule { }