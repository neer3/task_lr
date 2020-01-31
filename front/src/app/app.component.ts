import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  firstName;
  lastName;
  email;
  phone;
  addressLine1;
  addressLine2;
  city;
  pin;
  state;
  details = [{ firstName :'', lastName :'', email:'', phone:0, addressLine1:'', addressLine2:'', city:'', pin:0, state:'' }];
  newdetails = { firstName :'', lastName :'', email:'', phone:0, addressLine1:'', addressLine2:'', city:'', pin:0, state:'' };
  resetdetails = { firstName :'', lastName :'', email:'', phone:0, addressLine1:'', addressLine2:'', city:'', pin:0, state:'' };
  constructor(private api:ApiService) {
    this.GetDet();    
  }

  GetDet = () => {
    this.api.getDetails().subscribe(
      data => {
        this.details = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  CreateDet = () => {
    this.api.createdetail(this.newdetails).subscribe(
      data => {
        this.details.push(data);
        this.newdetails = this.resetdetails;
        this.GetDet();
      },
      error => {
        console.log(error);
      }
    )
  }

}
