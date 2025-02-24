import { Component, OnInit } from '@angular/core';
import type { TodoList } from '../models';
import { TaskStateService } from '../task-state.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  
  private todoList: TodoList[]|undefined;

  constructor(private listState: TaskStateService){}
  ngOnInit(): void {
      this.todoList = this.listState.getTodoList();
  }

  getTodoList(){
    return this.todoList
  }


}
