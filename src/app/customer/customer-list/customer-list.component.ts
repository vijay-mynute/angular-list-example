import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] =[
    {customerNo: 1, name:'Vijay', address:"", city:"Kollam", state: "Kerala", country: 'India' },
    {customerNo: 2, name:'Gopal', address:"", city:"Kollam", state: "Kerala", country: 'India' },
    {customerNo: 3, name:'Siva', address:"", city:"Kollam", state: "Kerala", country: 'India' },
    {customerNo: 4, name:'Sankaran', address:"", city:"Kollam", state: "Kerala", country: 'India' },
    {customerNo: 5, name:'Pillai', address:"", city:"Kollam", state: "Kerala", country: 'India' }
  ];
  ngOnInit() {
  }

}