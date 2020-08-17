import {Injectable} from '@angular/core';

import {Task} from './task'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = []

  constructor() {
  }

  addTask(data: Task): void {
    this.tasks = [...this.tasks, data]
    this.sortByDateAndName()
    this.addTaskToLocalStorage()
  }

  deleteTask(todo: Task): void {
    this.tasks = this.tasks.filter(task => task.name !== todo.name || task.date !== todo.date)
    this.deleteTaskFromLocalStorage(todo)
  }

  addTaskToLocalStorage(): void {
    localStorage.setItem('todos', JSON.stringify(this.tasks))
  }

  getTaskFromLocalStorage(): Task[] {
    return this.tasks = JSON.parse(localStorage.getItem('todos')) || []
  }

  updateTaskFromLocalStorage(task: Task): void {
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

  deleteTaskFromLocalStorage(todo: Task): void{
    let tasks = this.getTaskFromLocalStorage()
    tasks.map((task, index) => {
      if (task.name === todo.name) {
        tasks.splice(index, 1)
        localStorage.setItem('todos', JSON.stringify(tasks))
      }
    })
  }

  sortByDateAndName(): void {
    this.tasks.sort((a, b) => a.date.localeCompare(b.date) ||
      a.name.localeCompare(b.name))
  }

}
