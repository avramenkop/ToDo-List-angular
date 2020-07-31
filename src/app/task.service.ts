import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = []

  constructor() { }

  // getTasks(): object[] {
  //   return this.tasks
  // }

  addTask(data) {
    this.tasks.unshift(data)
  }

  deleteTask(todo) {
    this.tasks = this.tasks.filter(task => task.name !== todo.name)
  }

}
