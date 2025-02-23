import { Component } from '@angular/core';
import type { TodoList } from '../models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  public todoList:TodoList[] | undefined;


}
