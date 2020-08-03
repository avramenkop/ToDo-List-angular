import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'searchByDate'
})

export class SearchByDatePipe implements PipeTransform{
  transform(todos, searchDate) {
    if (!searchDate) {
      return todos
    }

    return todos.filter(todo => {
      return todo.date.includes(searchDate)
    })
  }
}
