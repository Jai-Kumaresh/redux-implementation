import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticPagesRoutingModule } from './static-pages-routing.module';
import { ErrorComponent } from './error/error.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

@NgModule({
  imports: [
    CommonModule,
    StaticPagesRoutingModule
  ],
  declarations: [ErrorComponent, MaintenanceComponent]
})
export class StaticPagesModule { }
