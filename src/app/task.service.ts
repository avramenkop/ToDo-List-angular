import {Injectable} from '@angular/core';
// import {Observable, of} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = []

  constructor() {
  }

  // getTasks(): Observable<object[]> {
  //   return of (this.tasks)
  // }

  addTask(data) {
    // this.tasks.push(data)
    this.tasks = [...this.tasks, data]
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
    return this.tasks = JSON.parse(localStorage.getItem('todos')) || []
  }

  updateTaskFromLocalStorage(task) {
    let todos = this.getTaskFromLocalStorage()
    todos.map(todo => {
      if (todo.name === task.name) {
        todo.date = task.date
      } else if (todo.date === task.date) {
        todo.name = task.name
      }
    })
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  deleteTaskFromLocalStorage(todo) {
    let tasks = this.getTaskFromLocalStorage()
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
