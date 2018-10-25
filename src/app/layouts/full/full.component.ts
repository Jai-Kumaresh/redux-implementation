import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {
	public config: PerfectScrollbarConfigInterface = {};

	constructor() {}

	public showMobileMenu = false;
	public innerWidth: any;
	public defaultSidebar: any;
	options = {
		theme: 'light', // two possible values: light, dark
		dir: 'ltr', // two possible values: ltr, rtl
		layout: 'vertical', // fixed value. shouldn't be changed.
		sidebartype: 'full', // four possible values: full, iconbar, overlay, mini-sidebar 
		sidebarpos: 'fixed', // two possible values: fixed, absolute
		headerpos: 'fixed', // two possible values: fixed, absolute
		boxed: 'full', // two possible values: full, boxed
		navbarbg: 'skin6', // six possible values: skin(1/2/3/4/5/6)
		sidebarbg: 'skin6', // six possible values: skin(1/2/3/4/5/6)
		logobg: 'skin5' // six possible values: skin(1/2/3/4/5/6)
	};

	ngOnInit() {
		this.defaultSidebar = this.options.sidebartype;
		this.handleSidebar();
	}

	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this.handleSidebar();
	}

	handleSidebar() {
		this.innerWidth = window.innerWidth;
		switch (this.defaultSidebar) {
			case 'full':
			case 'iconbar':
				if (this.innerWidth < 1170) {
					this.options.sidebartype = 'mini-sidebar';
				} else {
					this.options.sidebartype = this.defaultSidebar;
				}
				break;
			case 'overlay':
				if (this.innerWidth < 767) {
					this.options.sidebartype = 'mini-sidebar';
				} else {
					this.options.sidebartype = this.defaultSidebar;
				}
				break;
			default:
		}
	}

}
