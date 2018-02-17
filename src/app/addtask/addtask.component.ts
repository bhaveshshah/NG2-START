import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestCallingService } from '../common/rest-calling.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  priorityList: any;
  statusList: any;
  taskForm: FormGroup;
  completeData: any;
  params: any;
  updateData: any;

  constructor(public restCallingService: RestCallingService,
    public activatedRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.taskForm = new FormGroup({
      'task': new FormControl(null, Validators.required),
      'Priority': new FormControl(null, Validators.required),
      'Status': new FormControl(null, Validators.required),
      'assignedBy': new FormControl({ value: this.restCallingService.getData('userDetails').name, disabled: true })
    });

    this.activatedRoute.params.subscribe((params: Params) => {
      this.params = params.id;

      if (this.params) {
        this.updateData = this.restCallingService.getData('data')[this.params];
        this.taskForm.value['task'] = this.updateData.task;

        this.taskForm.setValue({
          task: this.updateData.task,
          Priority: this.updateData.priority,
          Status: this.updateData.status,
          assignedBy: this.updateData.assignedBy
        });
      }

    });

    this.priorityList = this.restCallingService.getPriorityList();
    this.statusList = this.restCallingService.getStatusList();
  }


  addNewTask() {
    const data = {
      task: this.taskForm.value['task'],
      priority: this.taskForm.value['Priority'],
      status: this.taskForm.value['Status'],
      assignedBy: this.restCallingService.getData('userDetails').name
    };

    this.completeData = this.restCallingService.getData('data');
    if (!this.params) {
      this.completeData.push(data);
    } else {
      this.completeData[this.params] = data;
    }

    this.restCallingService.setData('data', this.completeData);
    this.router.navigate(['/home/todo']);
  }

}
