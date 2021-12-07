import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { validFilters } from 'src/app/filter/filter.actions';
import { Task } from 'src/app/models/task.model';
import { AppState } from '../../app.reducers';
import { MarkTask, DeleteTask, EditTask } from '../task.actions';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  editInput:FormControl;
  tasks: Task[] = []
  filterSelected:validFilters = 'todos';
  constructor(private store: Store<AppState>) {

    this.editInput = new FormControl('',Validators.required)
    this.store.subscribe(tasks => {
      this.tasks = tasks.tasks;
      this.filterSelected = tasks.filter;
    })
  }

  completeTask(id: number) {
    const action = new MarkTask(id)
    this.store.dispatch(action);
  }

  deleteTask(id: number) {
    const action = new DeleteTask(id);
    this.store.dispatch(action)
  }

  editTask(id:number){
    if(this.editInput.valid){
      const action = new EditTask(id,this.editInput.value);
      this.store.dispatch(action);
      this.editInput.setValue('');
    }    
  }

  ngOnInit(): void {
  }

}
