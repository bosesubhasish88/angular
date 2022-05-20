import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/service/todos.service';
import { Todo } from 'src/app/service/todo.model';
import { Observable, catchError, of, map } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos$!: Todo[];
  todosUpdated: Todo[] = [];
  errorMsg!: string;
  constructor(private todoService: TodosService) { }

  ngOnInit(): void {

    this.loadTodos();
  }

  // Load todos
  loadTodos() {
    this.todoService.getTodos().pipe(
      map((todos: any) => todos.map((todo: any) => todo = { ...todo, 'isEdit': false }))).subscribe((todos: Todo[]) => this.todos$ = todos),
      (error: any)=> error
  }
  

  editTodo(todo: Todo) {
    todo.isEdit = true;
    let findIndex = this.todosUpdated.findIndex((t: Todo) => t.id === todo.id);
    if (findIndex === -1)
      this.todosUpdated.push({ ...todo });
    else
      this.todosUpdated[findIndex] = { ...todo };
  }
  updateTodo(todo: Todo) {
    console.log(todo);
    todo.isEdit = false;
    this.todoService.updateTodos(todo).subscribe((todo: any) => console.log('Update:', todo), (error: any)=> error)
   }
  resetTodo(todo: Todo) {
    let findIndex = this.todos$.findIndex((t: Todo) => t.id === todo.id);
    let findTodo = this.todosUpdated.find((t: Todo) => t.id === todo.id);
    if (!findTodo) return;
    findTodo.isEdit = false;
    this.todos$[findIndex] = findTodo;
   }

}
