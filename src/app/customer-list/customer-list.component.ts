import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  elements: any = [
    {id: 1, name: 'Rajesh', email: 'rkolaru@kabbage.com', category: 'Second Loan'},
    {id: 2, name: 'Gautham', email: 'gbharti@kabbage.com', category: 'Faster EMI Payments'},
    {id: 3, name: 'Ashay', email: 'ashayakc@kabbage.com', category: 'New Loan'},
  ];

  headElements = ['#', 'Name', 'Email', 'Category'];

}
