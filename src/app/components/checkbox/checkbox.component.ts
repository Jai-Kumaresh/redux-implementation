import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
	selector: 'app-checkbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements ViewCell, OnInit {

	renderValue: any;

	@Input() value: string;
	@Input() rowData: any;

	@Output() save: EventEmitter<any> = new EventEmitter();

	ngOnInit() {
		this.renderValue = parseInt(this.value); // .toString().toUpperCase();
	}

	onClick() {
		this.save.emit(this.rowData);
	}

}
