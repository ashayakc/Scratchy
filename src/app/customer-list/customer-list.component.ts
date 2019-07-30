import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerListService } from './customer-list.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  constructor(private readonly _router: Router,private custService : CustomerListService) {}

  elements: any = [
    {id: 1, name: 'Rajesh', email: 'rkolaru@kabbage.com', category: 'Another Loan'},
    {id: 2, name: 'Gautham', email: 'gbharti@kabbage.com', category: 'Early EMI Payments'},
    {id: 3, name: 'Ashay', email: 'ashayakc@kabbage.com', category: 'Another Loan'},
    {id: 4, name: 'Ankita', email: 'akumari@kabbage.com', category: 'Early EMI Payments'},
    {id: 5, name: 'Mahi', email: 'mshaik@kabbage.com', category: 'Another Loan'},
    {id: 6, name: 'Ravi', email: 'rgunasekaran@kabbage.com', category: 'Early EMI Payments'}
  ];

  headElements = ['#', 'Name', 'Email', 'Category','Gift Option'];

  private giftOptions = function(val:string) {
    this.custService.setCustEmail(val);
    this._router.navigate(['/card-options']);
  }

}
