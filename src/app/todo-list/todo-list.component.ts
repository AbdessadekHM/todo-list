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
  public isShown: boolean | undefined;
  

  constructor(private listState: TaskStateService){}
  ngOnInit(): void {
      this.todoList = this.listState.getTodoList();
      console.log(this.isShown)
  }

  getTodoList(){
    return this.todoList
  }
  onDeleteClick(element: TodoList){
    this.listState.onDelete(element)
  }
  onAddClick(element:TodoList){
    this.listState.onAdd(element)
  }
  onClearClick(){
    this.todoList = []
  }
  show(){
    this.isShown = true
  }
  hide(){
    this.isShown = false
  }


}
