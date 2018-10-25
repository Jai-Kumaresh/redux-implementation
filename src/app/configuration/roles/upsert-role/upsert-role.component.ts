import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { ConfigurationService } from '../../services/configuration.service';

@Component({
	selector: 'app-upsert-role',
	templateUrl: './upsert-role.component.html',
	styleUrls: ['./upsert-role.component.css']
})
export class UpsertRoleComponent implements OnInit {

	pageType = 'Create';
	model: any = {};
	showAlert = false;
	alertType = '';
	alertMessage = '';

	constructor(public router: Router, private route: ActivatedRoute, private configurationService: ConfigurationService, private toastr: ToastrService) {}

	ngOnInit() {
		var roleId = this.route.params['value'].id;
		if (roleId) {
			this.goInit(roleId)
		}
	}

	goInit (roleId) {
		this.pageType = 'Update';
		var self = this;
		this.configurationService.getSelectedRole(roleId).subscribe((roleDatas: any) => {
			// console.log(roleDatas);
			if (roleDatas.success) {
				self.model.name = roleDatas.return.description;
				self.model.status = typeof roleDatas.return.status == 'string' ? parseInt(roleDatas.return.status) : roleDatas.return.status;
				self.model.deleted_at = roleDatas.return.deleted_at;
			}
		})
	}

	onSubmit () {
		var self = this;
		var reqData = {};
		console.log(this.model.status);
		reqData['status'] = this.model.status == true ? '1' : (this.model.status == false ? '0' : this.model.status.toString());
		reqData['description'] = this.model.name;
		if (this.pageType == 'Update') {
			reqData['role_id'] = parseInt(this.route.params['value'].id);
			reqData['deleted_at'] = this.model.deleted_at;
			reqData['tenant_id'] = parseInt(localStorage.getItem('ngStorage-system_tenant_id'));
		} else {
			reqData['formrole'] = 'add';
		}
		// console.log(reqData);
		this.configurationService[this.pageType == 'Update' ? 'updateRole' : 'createRole'](reqData).subscribe((data: any) => {
			// console.log(data);
			if (data.success) {
				self.toastr.success('Role saved successful!', 'Success!');
				self.router.navigate(['configuration/roles']);
			} else {
				self.alertType = 'danger';
				self.alertMessage = data.message;
				self.showAlert = true;
				setTimeout(function() {
					self.showAlert = false;
				}, 3000)
			}
		})
	}

}
