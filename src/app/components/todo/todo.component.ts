import { Component, OnInit } from '@angular/core';

import { Todo } from './../../models/todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[];
  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: 'Todo One',
        completed: false
      },
      {
        id: 1,
        title: 'Todo Two',
        completed: false
      },
      {
        id: 1,
        title: 'Todo Three',
        completed: false
      }
    ];
  }

}