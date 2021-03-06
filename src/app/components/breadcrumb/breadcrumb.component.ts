import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
	selector: 'app-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

	@Input() layout;
	pageInfo;
	
	constructor(private router: Router, private activatedRoute: ActivatedRoute) {
		this.router.events.pipe(filter(event => event instanceof NavigationEnd)).pipe(map(() => this.activatedRoute)).pipe(map(route => {
			while (route.firstChild) {
				route = route.firstChild;
			}
			// console.log(route)
			return route;
		})).pipe(filter(route => route.outlet === 'primary')).pipe(mergeMap(route => route.data)).subscribe(event => {
			this.pageInfo = event;
			// console.log(event)
		});
	}

	ngOnInit() {}
}
