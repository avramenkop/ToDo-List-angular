import {Component, OnInit} from '@angular/core';

import {TaskService} from "../task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  searchTerm = ''
  searchDate

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
  }

  deleteTask(task) {
    this.taskService.deleteTask(task)
  }

}
