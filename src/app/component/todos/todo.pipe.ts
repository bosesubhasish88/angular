import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'src/app/service/todo.model';

@Pipe({
  name: 'todo'
})
export class TodoPipe implements PipeTransform {

  transform(todos: Todo[]): Todo[] {
    return todos;
  }

}
