import {Pipe, PipeTransform} from "@angular/core";


@Pipe({
  name: 'searchByName'
})

export class SearchByNamePipe implements PipeTransform{


  transform(todos, searchTerm): any {
    if (!searchTerm.trim()) {
      return todos
    }

    return todos.filter(todo => {
      return todo.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }

}
