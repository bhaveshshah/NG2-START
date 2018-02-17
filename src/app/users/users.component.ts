import { Component, OnInit } from '@angular/core';
import { RestCallingService } from '../common/rest-calling.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList: any;
  constructor(public restCallingService: RestCallingService) { }

  ngOnInit() {
    this.restCallingService.getAllUser().subscribe(
      data => {
        this.userList = data.json().data;
      }, err => {
        alert('Some error calling the rest api call');
      }
    );
  }

  deleteUser(event, id) {
    event.preventDefault();
    if (id !== null) {
      this.userList = this.userList.filter(function(value, index){
        return value.id !== id;
      });
    }
  }

}
