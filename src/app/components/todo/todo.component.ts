import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';

import { Todo } from './../../models/todos';
import { Observable, from } from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Observable<Todo[]>;
  constructor( private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  deleteTodo(todo: Todo) {
    this.todos.pipe(
      map(todos => todos.filter(currentTodo => currentTodo.id !== todo.id))
    ).subscribe();
    this.todoService.deleteTodo(todo).subscribe();
  }

}
