import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { UserClass } from '../UserClass';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //inject the service
  constructor( private service: DataServiceService) { }

  users:UserClass[] | undefined;

  ngOnInit(): void {

    this.service.getAllUsers().subscribe(result=>this.users=result);

  }

}
