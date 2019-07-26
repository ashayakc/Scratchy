import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  constructor(private readonly _router: Router) {}

  elements: any = [
    {id: 1, name: 'Rajesh', email: 'rkolaru@kabbage.com', category: 'Second Loan'},
    {id: 2, name: 'Gautam', email: 'gbharti@kabbage.com', category: 'Faster EMI Payments'},
    {id: 3, name: 'Ashay', email: 'ashayakc@kabbage.com', category: 'New Loan'},
  ];

  headElements = ['#', 'Name', 'Email', 'Category','Gift Option'];

  private giftOptions = function() {
    this._router.navigate(['/card-options']);
  }

}
