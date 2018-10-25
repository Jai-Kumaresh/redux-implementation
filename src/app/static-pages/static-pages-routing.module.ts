import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

const routes: Routes = [{
	path: 'page-not-found',
	component: ErrorComponent
}, {
	path: 'maintenance',
	component: MaintenanceComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticPagesRoutingModule { }
