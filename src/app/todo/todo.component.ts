import { Component, OnInit, OnChanges, SimpleChange, Input } from '@angular/core';
import { RestCallingService } from '../common/rest-calling.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  taskList: any;

  constructor(public restCallingService: RestCallingService, public router: Router) { }

  ngOnInit() {
    this.taskList = this.restCallingService.getData('data');
  }

  deleteTask(event, id) {
    event.preventDefault();
    this.taskList.splice(id, 1);
    this.restCallingService.setData('data', this.taskList);
  }

  updateTask(event, id) {
    event.preventDefault();
    this.router.navigateByUrl('/home/add-task/' + id);
  }
}
