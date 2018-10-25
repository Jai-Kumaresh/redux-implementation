import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AuthService } from '../services/auth.service';
import * as moment from 'moment';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers:  [ AuthService ]
})
export class LoginComponent implements OnInit {
	
	constructor(public router: Router, private authService: AuthService, private titleService: Title) {}

	showLoginForm = true;
	showRecoverForm = false;
	loginLoading = false;
	recoverLoading = false;
	loginModel: any = {};
	recoverModel: any = {};
	allTenantLists = [];
	showAlert = false;
	alertType = '';
	alertMessage = '';

	ngOnInit() {
		if (localStorage.getItem('isLoggedin')) {
			this.router.navigate(['configuration']);
		}
		this.loginModel.tenant_id = '';
		this.recoverModel.tenantId = '';
		this.getTenants();
	}

	getTenants(): void {
		this.authService.getTenantLists().subscribe((data: any) => {
			if (data['org_sts']) {
				var allTenantLists = []
				for (let key in data['tenantList']) {
					this.allTenantLists.push({
						id: key,
						name: data['tenantList'][key]
					})
				}
			}
		});
	}

	onSubmitLogin() {
		// console.log(this.loginModel)
		this.loginLoading = true;
		var self = this;
		this.authService.loginAuthenticate(this.loginModel).subscribe((data: any) => {
			// console.log(data)
			if (data.success) {
				self.loginLoading = false;
				// var ngidleexpiry = { id: new Date().getTime(), time: moment().format() };
				localStorage.setItem('isLoggedin', 'true');
				// localStorage.setItem('ngIdle.expiry', JSON.stringify(ngidleexpiry));
				localStorage.setItem('ngStorage-stay', moment().add(1, 'days').format('YYYY-MM-DD HH:mm:ss'));
				localStorage.setItem('access_token', data.access_token);
				localStorage.setItem('ngStorage-system_tenant', data.credentials.org);
				localStorage.setItem('ngStorage-system_tenant_id', data.credentials.logged_tenant_id);
				localStorage.setItem('ngStorage-system_username', self.loginModel.username);
				localStorage.setItem('ngStorage-system_user_id', data.credentials.user_id);
				// localStorage.setItem('ngStorage-user : set all response', JSON.stringify(data));
				this.titleService.setTitle('IRIS(' + data.credentials.org + ')');
				self.router.navigate(['configuration']);
			}
		})
	}

	onSubmitRecover () {
		this.recoverLoading = true;
		var self = this, reqData = {};
		reqData['email'] = this.recoverModel.email;
		reqData['tenant_id'] = this.recoverModel.tenantId;
		this.authService.forgetPassword(reqData).subscribe((data: any) => {
			// console.log(data)
			self.recoverLoading = false;
			if (data.success) {
			} else {
				self.alertType = 'danger';
				self.alertMessage = data.message;
				self.showAlert = true;
				// setTimeout(function() {
				// 	self.showAlert = false;
				// }, 3000)
			}
		}, error => {
			self.recoverLoading = false;
			self.alertType = 'danger';
			self.alertMessage = Array.isArray(error.error) ? error.error[0].message : error.error.message;
			self.showAlert = true;
			// setTimeout(function() {
			// 	self.showAlert = false;
			// }, 3000)
		});
	}

}
