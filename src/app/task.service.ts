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
    this.sortByDateAndName()
    this.addTaskToLocalStorage()
  }

  deleteTask(todo) {
    this.tasks = this.tasks.filter(task => task.name !== todo.name || task.date !== todo.date)
    this.deleteTaskFromLocalStorage(todo)
  }

  addTaskToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.tasks))
  }

  getTaskFromLocalStorage() {
    this.tasks = JSON.parse(localStorage.getItem('todos')) || []
  }

  deleteTaskFromLocalStorage(todo) {
    let tasks = JSON.parse(localStorage.getItem('todos'))
    tasks.map((task, index) => {
      if (task.name === todo.name) {
        tasks.splice(index, 1)
        localStorage.setItem('todos', JSON.stringify(tasks))
      }
    })
  }

  sortByDateAndName() {
    this.tasks.sort((a, b) => a.date.localeCompare(b.date) ||
      a.name.localeCompare(b.name))
  }

}
