import { Component } from '@angular/core';

import {TaskService} from "./task.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tasks: object[]

  constructor(public taskService: TaskService) {
  }

  receiveTasks(event) {
    this.tasks = event;
  }

}
