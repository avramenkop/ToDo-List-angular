import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = []

  constructor() {
  }

  addTask(data) {
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
      if (todo.id === task.id && todo.date === task.date) {
        todo.name = task.name
      } else if (todo.id === task.id && todo.name === task.name) {
        todo.date = task.date
      } else if (todo.id === task.id && todo.date !== task.date && todo.name !== task.name) {
        todo.name = task.name
        todo.date = task.date
      }
    })

    todos.sort((a, b) => a.date.localeCompare(b.date) ||
      a.name.localeCompare(b.name))

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
