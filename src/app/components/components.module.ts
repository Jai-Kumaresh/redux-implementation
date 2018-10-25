import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DataTablesModule } from 'angular-datatables';

import { ComponentsRoutingModule } from './components-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { DataTableComponent } from './data-table/data-table.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
	imports: [
		CommonModule,
		ComponentsRoutingModule,
		NgbModule,
		PerfectScrollbarModule,
		DataTablesModule,
		FormsModule
	],
	declarations: [
		SidebarComponent,
		HeaderComponent,
		FooterComponent,
		NavigationComponent,
		BreadcrumbComponent,
		DataTableComponent,
		SpinnerComponent,
		CheckboxComponent,
		ButtonComponent
	],
	exports: [
		SidebarComponent,
		HeaderComponent,
		FooterComponent,
		NavigationComponent,
		BreadcrumbComponent,
		DataTableComponent,
		SpinnerComponent,
		CheckboxComponent,
		ButtonComponent
	],
	providers: []
})
export class ComponentsModule { }
