import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { LocalDataSource } from 'ng2-smart-table';

import { ConfigurationService } from '../services/configuration.service';
import { RoleState } from './store/role.state';
import { GetAllRole } from './store/actions/role.actions';
import { RoleEffects } from './store/effects/role.effect';
import { Role } from './role.model';

@Component({
	selector: 'app-roles',
	templateUrl: './roles.component.html',
	styleUrls: ['./roles.component.css']
})
export class RolesComponent implements AfterViewInit {

	showTable = false;
	source: any = [];
	settings = {
		columns: {
			description: {
				title: 'Description',
				filter: true
			}
		},
		mode: 'external',
		// selectMode: 'multi',
		actions: {
			delete: false,
			add: false,
			// select: true,
			position: 'right'
		},
		edit: {
			editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>'
		}
	};
	role: Role;

	constructor(public router: Router, private configurationService: ConfigurationService, private store: Store<RoleState>) {}

	ngAfterViewInit() {
		var self = this;
		this.store.dispatch(new GetAllRole(this.role));
		setTimeout(() => {
			// console.log(this.store.source['value'].role)
			self.goInit(this.store.source['value'].role);
		});
	}

	goInit (roleDatas) {		
		var tableDatas = [];
		for (let i in roleDatas) {
			tableDatas.push({roleId: roleDatas[i].role_id, description: roleDatas[i].description});
		}
		this.source = new LocalDataSource(tableDatas);
		this.showTable = true;
		// console.log(this.store.dispatch(new GetAllRole(this.role)));
		// var self = this;
		// this.configurationService.getAllRoles().subscribe((roleDatas: any) => {
		// 	if (roleDatas && roleDatas.length) {
		// 		var tableDatas = [];
		// 		for (var i=0; i<roleDatas.length; i++) {
		// 			tableDatas.push({roleId: roleDatas[i].role_id, description: roleDatas[i].description})
		// 			if (i == roleDatas.length - 1) {
		// 				self.source = new LocalDataSource(tableDatas);
		// 				self.showTable = true;
		// 			}
		// 		}
		// 	}
		// })
	}

	sTableEvents (event, eventType) {
		console.log(eventType, event);
		if (eventType == 'edit') {
			this.router.navigate(['/configuration/update-role/' + event.data.roleId]);
		}
		// event.confirm.resolve();
	}

}
