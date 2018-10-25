import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { NgbModal, ModalDismissReasons, NgbPanelChangeEvent, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { AuthService } from '../../auth/services/auth.service';

declare var $: any;

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.css'],
	providers: [AuthService]
})
export class NavigationComponent implements OnInit {

	@Output() toggleSidebar = new EventEmitter<void>();

	public config: PerfectScrollbarConfigInterface = {};

	public showSearch = false;
	curUserName = '';
	curTenant = '';

	constructor(private modalService: NgbModal, public router: Router, private authService: AuthService, private titleService: Title) {}

	ngOnInit() {
		this.curUserName = localStorage.getItem('ngStorage-system_username');
		this.curTenant = localStorage.getItem('ngStorage-system_tenant');
	}

	logOut() {
		this.authService.siteLogout().subscribe((data: any) => {
			// console.log(data)
			if (data.success) {
				localStorage.removeItem('isLoggedin');
				localStorage.removeItem('ngStorage-stay');
				localStorage.removeItem('access_token');
				localStorage.removeItem('ngStorage-system_tenant');
				localStorage.removeItem('ngStorage-system_tenant_id');
				localStorage.removeItem('ngStorage-system_username');
				localStorage.removeItem('ngStorage-system_user_id');
				this.titleService.setTitle('IRIS');
				this.router.navigate(['login']);
			}
		})
	}

}
