import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-configuration',
	templateUrl: './configuration.component.html',
	styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

	tenantName = '';
	curUserName = '';

	constructor() { }

	ngOnInit() {
		this.tenantName = localStorage.getItem('ngStorage-system_tenant');
		this.curUserName = localStorage.getItem('ngStorage-system_username');
	}

}
