import { Component, OnInit } from '@angular/core';

import {TaskService} from "../task.service";

@Component({
  selector: 'app-search-task',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.scss']
})
export class SearchTaskComponent implements OnInit {

  taskName: string

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
    console.log(this.taskName)
  }

  // searchByName(event) {
  //   this.taskService.searchByName(event.target.value)
  // }
}
