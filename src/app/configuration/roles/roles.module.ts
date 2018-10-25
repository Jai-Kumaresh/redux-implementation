import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { UpsertRoleComponent } from './upsert-role/upsert-role.component';
import { reducer } from './store/reducers/role.reducer';
import { RoleEffects } from './store/effects/role.effect';

@NgModule({
	imports: [
		CommonModule,
		RolesRoutingModule,
		Ng2SmartTableModule,
		FormsModule,
		NgbModule,
		StoreModule.forRoot({
			role: reducer
		}),
		EffectsModule.forRoot([RoleEffects])
	],
	declarations: [RolesComponent, UpsertRoleComponent],
	exports: [UpsertRoleComponent]
})
export class RolesModule { }
