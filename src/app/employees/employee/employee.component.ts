import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { EmployeeService } from '../shared/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-employee',
	templateUrl: './employee.component.html',
	styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

	constructor(public ticketService: EmployeeService, public tostr: ToastrService) { }

	ngOnInit() {
		this.resetForm();
	}

	onSubmit(ticketForm: NgForm) {
		if (ticketForm.value.$key == null)
			this.ticketService.insertTicket(ticketForm.value);
		else
			this.ticketService.updateTicket(ticketForm.value);
			this.resetForm(ticketForm);
			this.tostr.success('Submitted Succcessfully', 'Ticket Added');
	}

	resetForm(ticketForm?: NgForm) {
		if (ticketForm != null) 
			ticketForm.reset();
		this.ticketService.selectedTicket = {
			$key: null,
			title: '',
			description: '',
			count: 0
		}
	}
}
