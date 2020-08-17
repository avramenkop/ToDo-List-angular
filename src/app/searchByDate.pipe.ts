import {Pipe, PipeTransform} from "@angular/core";

import {Task} from './task'

@Pipe({
  name: 'searchByDate',
})

export class SearchByDatePipe implements PipeTransform{
  transform(todos: Task[], searchDate: string): Task[] {
    if (!searchDate) {
      return todos
    }

    return todos.filter(todo => {
      return todo.date.includes(searchDate)
    })
  }
}
