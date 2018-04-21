import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Tickets } from './employee.model';

@Injectable()
export class EmployeeService {
	ticketList: AngularFireList<any>;
	selectedTicket: Tickets = new Tickets();
	constructor(private firebase :AngularFireDatabase ) { }

	getData() {
		this.ticketList = this.firebase.list('ticket');
		return this.ticketList;
	}

	insertTicket(ticket : Tickets) {
		this.ticketList.push({
			title: ticket.title,
			description: ticket.description,
			count: 0
		});
	}

	updateTicket(ticket : Tickets) {
		this.ticketList.update(ticket.$key, {
			title: ticket.title,
			description: ticket.description
		});
	}

	deleteTicket($key : string) {
		this.ticketList.remove($key);
	}

	addToCount(count : number, $key: string ){ 
		this.ticketList.update($key, {
			count: count
		});
	}

}
