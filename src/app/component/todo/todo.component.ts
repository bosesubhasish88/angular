import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/service/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input('todo') todo!: any;
  isEditable: boolean = false; 
  constructor() { }

  ngOnInit(): void {
  }
}
