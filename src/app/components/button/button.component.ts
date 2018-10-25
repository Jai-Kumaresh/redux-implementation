import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.css']
})
export class ButtonComponent implements ViewCell, OnInit {

	renderValue: any;

	@Input() value: string;
	@Input() rowData: any;
	iTagClass = '';
	buttonClass = '';

	@Output() save: EventEmitter<any> = new EventEmitter();

	ngOnInit() {
		this.renderValue = this.value; // .toString().toUpperCase();
		this.iTagClass = this.value == 'Update' ? 'fas fa-pencil-alt' : 'fa fa-plus';
		this.buttonClass = this.value == 'Update' ? 'btn btn-primary' : 'btn btn-success';
	}

	onClick() {
		this.save.emit(this.rowData);
	}

}
