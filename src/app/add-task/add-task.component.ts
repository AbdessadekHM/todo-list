import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { TaskStateService } from '../task-state.service';
import { TodoList } from '../models';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {


  taskForm = new FormGroup({
    task: new FormControl<string>('',{nonNullable:true}),
    isAchieved: new FormControl<boolean>(false, {nonNullable:true}) 
  })
  name = new FormControl('')
 
  @Output()
  private isCanceled = new EventEmitter<boolean>(true);
  
  
  constructor(private todoState: TaskStateService){

  }

  hide(){
    this.isCanceled.emit(false)
  }
  add(task: string | undefined, isAchieved:boolean | undefined){
    if(task == undefined || isAchieved == undefined) return;
    const id = this.todoState.getTodoList()?.length || 0 
  
    const createdDate = new Date();
    
    const taskToAdd:TodoList = {
      id,
      task,
      isAchieved,
      createdDate
    }
    this.todoState.onAdd(taskToAdd)
    this.taskForm.reset()
  }
}
