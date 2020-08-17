import {Component, OnInit} from '@angular/core';

import {TaskService} from "../task.service";
import {Task} from '../task'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  searchTerm: string = ''
  searchDate: string = ''
  taskNameBeforeEditing: string = ''
  taskDateBeforeEditing: string = ''

  constructor(public taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getTaskFromLocalStorage()
  }

  editTask(task: Task): void {
    this.taskNameBeforeEditing = task.name
    this.taskDateBeforeEditing = task.date
    task.editable = true
  }

  doneEdit(task: Task): void {
    if (task.name.trim().length === 0 || task.date.trim().length === 0) {
      task.name = this.taskNameBeforeEditing
      task.date = this.taskDateBeforeEditing
    }
    this.taskService.updateTaskFromLocalStorage(task)
    task.editable = false
  }

  cancelEdit(task: Task): void {
    task.name = this.taskNameBeforeEditing
    task.date = this.taskDateBeforeEditing
    task.editable = false
  }

  updateTaskFromLocalStorageStatus(task: Task): void {
    let todos = this.taskService.getTaskFromLocalStorage()
    todos.map(todo => {
      if (todo.name === task.name && todo.date === task.date) {
        if (task.completed) {
          todo.completed = true
        } else {
          todo.completed = false
        }
      }
    })
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task)
  }

  resetDate(): void {
    this.searchDate = null
  }

}
