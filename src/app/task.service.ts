import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = []

  constructor() {
  }

  // getTasks(): object[] {
  //   return this.tasks
  // }

  addTask(data) {
    this.tasks.unshift(data)
    console.log(this.tasks)
  }

  deleteTask(todo) {
    this.tasks = this.tasks.filter(task => task.name !== todo.name)
  }

  sortByDateAndName() {
    this.tasks.sort((a, b) => a.date.localeCompare(b.date) ||
      a.name.localeCompare(b.name))
  }

}
