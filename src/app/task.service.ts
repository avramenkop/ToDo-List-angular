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
    console.log(this.tasks)
  }

  deleteTask(todo) {
    this.tasks = this.tasks.filter(task => task.name !== todo.name)
  }

  markAsDone() {

  }



  searchByName(inputValue) {

    console.log('before filter', this.tasks)

    this.tasks.filter(task => {
      if (task.name.search(inputValue) != -1) {
        return task
      }
    })

    console.log('after filter', this.tasks)

  }

}
