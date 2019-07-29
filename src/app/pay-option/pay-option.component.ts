import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../service';
import { CustomerListService } from '../customer-list/customer-list.service';

@Component({
  selector: 'app-pay-option',
  templateUrl: './pay-option.component.html',
  styleUrls: ['./pay-option.component.css']
})
export class PayOptionComponent implements OnInit {

  constructor(private service: ConfigService, private custService: CustomerListService) { }

  ngOnInit() {
  }

  sendNotification() {
    var email = this.custService.getCustEmail();
    var category = (email === "rkolaru@kabbage.com" || email === "ashayakc@kabbage.com" || email === "mshaik@kabbage.com") ? 
      'SecondLoan': 'FasterEMIPayments';
    var content = (category === 'SecondLoan') ? 
      'Hey John, click here for an exciting offer on your next cash flow fix from Kabbage.' : 
      'Hey John, click here for an exciting offer on your next due payment.';
    this.service.sendPushNotification(content);
    this.service.sendMail(email, category);
  }
}
