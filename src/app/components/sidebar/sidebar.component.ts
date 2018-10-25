import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { filter, map, mergeMap } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	showMenu = 'Administrative Module';
	showSubMenu = '';
	public sidebarnavItems: any[];
	// this is for the open close
	addExpandClass(element: any) {
		if (element === this.showMenu) {
			this.showMenu = '0';
		} else {
			this.showMenu = element;
		}
	}
	addActiveClass(element: any) {
		if (element === this.showSubMenu) {
			this.showSubMenu = '0';
		} else {
			this.showSubMenu = element;
		}
	}

	constructor(private modalService: NgbModal,	private router: Router, private activatedRoute: ActivatedRoute) {
		this.router.events.pipe(filter(event => event instanceof NavigationEnd)).pipe(map(() => this.activatedRoute)).pipe(map(route => {
			while (route.firstChild) {
				route = route.firstChild;
			}
			// console.log(route)
			return route;
		})).pipe(filter(route => route.outlet === 'primary')).pipe(mergeMap(route => route.data)).subscribe(event => {
			this.showMenu = event.mainMenu;;
			this.showSubMenu = event.subMenu;
			// console.log(event)
		});
	}

	// End open close
	ngOnInit() {
		this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);
	}

}
