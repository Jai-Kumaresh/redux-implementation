import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { AuthGuard } from './services/auth.guard';

export const Approutes: Routes = [
	{
		path: '',
		component: FullComponent,
		canActivate: [AuthGuard],
		children: [{
			path: '',
			redirectTo: '/configuration/organization',
			pathMatch: 'full'
		}, {
			path: 'configuration',
			loadChildren: './configuration/configuration.module#ConfigurationModule'
		}]
	}, {
		path: '',
		component: BlankComponent,
		children: [{
			path: 'login',
			loadChildren: './auth/auth.module#AuthModule'
		}, {
			path: 'site',
			loadChildren: './static-pages/static-pages.module#StaticPagesModule'
		}]
	}, {
		path: '**',
		// loadChildren: './static-pages/static-pages.module#StaticPagesModule'
		redirectTo: '/site/page-not-found'
	}
];

