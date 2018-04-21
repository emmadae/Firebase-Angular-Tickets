import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Tickets } from '../shared/employee.model';
import { ToastrService } from 'ngx-toastr';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  ticketList: Tickets[];
  constructor(public ticketService: EmployeeService, public tostr: ToastrService) { }

  	ngOnInit() {
		var x = this.ticketService.getData();
		x.snapshotChanges().subscribe(item => {
			this.ticketList = [];
			item.forEach(element => {
				var y = element.payload.toJSON();
				y["$key"] = element.key;
				this.ticketList.push(y as Tickets);
			});
		});
  	}

  	onEdit(emp: Tickets) {
    	this.ticketService.selectedTicket = Object.assign({}, emp);
  	}

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.ticketService.deleteTicket(key);
      this.tostr.warning("Deleted Successfully", "Ticket Issue Deleted");
    }
  }

  	onCount(count, $key) {
		count++
		this.ticketService.addToCount(count, $key);
	}

}
