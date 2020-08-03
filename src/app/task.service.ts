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
  }

  deleteTask(todo) {
    this.tasks = this.tasks.filter(task => task.name !== todo.name)
  }

  // addTaskToLocalStorage() {
  //   localStorage.setItem('todos', JSON.stringify(this.tasks))
  // }

  sortByDateAndName() {
    this.tasks.sort((a, b) => a.date.localeCompare(b.date) ||
      a.name.localeCompare(b.name))
  }

}
