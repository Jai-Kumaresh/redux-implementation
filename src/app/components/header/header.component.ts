import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	@Input('options') options;
	@Input('showMobileMenu') showMobileMenu;
	@Output() showMobileMenuChange = new EventEmitter<boolean>();
	
	public defaultSidebar: any;
	public isCollapsed = false;
	public expandLogo = false;

	constructor() {}

	ngOnInit() {
    	this.defaultSidebar = this.options.sidebartype;
    }

	Logo() {
		this.expandLogo = !this.expandLogo;
	}

	changeMenu () {
		this.showMobileMenu = !this.showMobileMenu;
		this.showMobileMenuChange.emit(this.showMobileMenu);
	}

	toggleSidebarType() {
		switch (this.options.sidebartype) {
			case 'full':
			case 'iconbar':
				this.options.sidebartype = 'mini-sidebar';
				break;

			case 'overlay':
				this.showMobileMenu = !this.showMobileMenu;
				break;

			case 'mini-sidebar':
				if (this.defaultSidebar === 'mini-sidebar') {
					this.options.sidebartype = 'full';
				} else {
					this.options.sidebartype = this.defaultSidebar;
				}
				break;

			default:
		}
	}

}
