import {Component, OnInit} from '@angular/core';

import {TaskService} from "../task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  searchTerm = ''
  searchDate = ''
  taskNameBeforeEditing = ''
  taskDateBeforeEditing = ''

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTaskFromLocalStorage()
  }

  editTask(task) {
    this.taskNameBeforeEditing = task.name
    this.taskDateBeforeEditing = task.date
    task.editable = true
  }

  doneEdit(task) {
    if (task.name.trim().length === 0 || task.date.trim().length === 0) {
      task.name = this.taskNameBeforeEditing
      task.date = this.taskDateBeforeEditing
    }
    task.editable = false
  }

  cancelEdit(task) {
    task.name = this.taskNameBeforeEditing
    task.date = this.taskDateBeforeEditing
    task.editable = false
  }

  deleteTask(task) {
    this.taskService.deleteTask(task)
  }

  resetDate() {
    this.searchDate = null
  }

}
