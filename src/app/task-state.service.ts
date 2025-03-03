import { Injectable } from '@angular/core';
import { TodoList } from './models';

@Injectable({
  providedIn: 'root'
})
export class TaskStateService {

  public todoList:TodoList[]= [
    {id:0,task:"nothing",createdDate: new Date(), isAchieved:false},
    {id:0,task:"nothing",createdDate: new Date(), isAchieved:false},
    {id:0,task:"nothing",createdDate: new Date(), isAchieved:false}


  ];

  constructor() { }

  onAdd(element: TodoList){
    this.todoList?.push(element);
  }

  onDelete(element:TodoList){
    this.todoList?.splice(this.todoList.indexOf(element),1);
  }
  getTodoList(): TodoList[]|undefined{
    
    return this.todoList
  }
}
