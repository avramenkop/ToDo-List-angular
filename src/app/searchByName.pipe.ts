import {Pipe, PipeTransform} from "@angular/core";

import {Task} from './task'


@Pipe({
  name: 'searchByName'
})

export class SearchByNamePipe implements PipeTransform{


  transform(todos: Task[], searchTerm: string): Task[] {
    if (!searchTerm.trim()) {
      return todos
    }

    return todos.filter(todo => {
      return todo.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }

}
