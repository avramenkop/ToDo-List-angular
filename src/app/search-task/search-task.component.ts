import { Component, OnInit } from '@angular/core';

import {TaskService} from "../task.service";

@Component({
  selector: 'app-search-task',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.scss']
})
export class SearchTaskComponent implements OnInit {

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
  }

  searchByName(event) {
    this.taskService.searchByName(event.target.value)
  }
}
