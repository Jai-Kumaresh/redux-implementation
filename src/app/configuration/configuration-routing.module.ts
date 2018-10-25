import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from './configuration.component';
import { UpsertRoleComponent } from './roles/upsert-role/upsert-role.component';

const routes: Routes = [{
	path: '',
	redirectTo: '/configuration/organization',
	pathMatch: 'full'
}, {
	path: 'organization',
	component: ConfigurationComponent,
	data: {
		title: 'Configuration Dashboard',
		mainMenu: 'Administrative Module',
		urls: [
			{ title: 'Configuration', url: '/configuration/organization' }
		]
	},
	children: []
}, {
	path: 'roles',
	loadChildren: './roles/roles.module#RolesModule'
}, {
	path: 'create-role',
	component: UpsertRoleComponent,
	data: {
		title: 'Create Role',
		mainMenu: 'Administrative Module',
		urls: [
			{ title: 'Configuration', url: '/configuration/organization' },
			{ title: 'Create Role', url: '/configuration/create-role'}
		]
	}
}, {
	path: 'update-role/:id',
	component: UpsertRoleComponent,
	data: {
		title: 'Update Role',
		mainMenu: 'Administrative Module',
		urls: [
			{ title: 'Configuration', url: '/configuration/organization' },
			{ title: 'Update Role', url: '/configuration/update-role/1'}
		]
	}
}, {
	path: '**',
	redirectTo: '/configuration/organization'
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
