import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { RolesModule } from './roles/roles.module';

import { ConfigurationService } from './services/configuration.service';
import { ConfigurationComponent } from './configuration.component';


@NgModule({
	imports: [
		CommonModule,
		ConfigurationRoutingModule,
		Ng2SmartTableModule,
		RolesModule
	],
	declarations: [ConfigurationComponent],
	providers: [ConfigurationService]
})
export class ConfigurationModule { }
