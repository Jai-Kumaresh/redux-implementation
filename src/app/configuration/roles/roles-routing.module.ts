import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolesComponent } from './roles.component';
import { UpsertRoleComponent } from './upsert-role/upsert-role.component';

const routes: Routes = [{
	path: '',
	component: RolesComponent,
	data: {
		title: 'Roles',
		mainMenu: 'Administrative Module',
		urls: [
			{ title: 'Configuration', url: '/configuration/organization' },
			{ title: 'Roles', url: '/configuration/roles'}
		]
	}
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
