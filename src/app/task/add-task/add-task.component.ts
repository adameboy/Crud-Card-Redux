import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Task } from 'src/app/models/task.model';
import { AddTask, MarkAllTasks, CleanCompletedTasks } from '../task.actions';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  toggle = true;
  pendingTasks:number = 0;
  inputTask: FormControl
  constructor(private store: Store<AppState>) {
    this.inputTask = new FormControl('', Validators.required);
  }

  ngOnInit(): void {

    this.store.select('tasks').subscribe(state=>this.countPendingTasks(state));

  }

  countPendingTasks(state:Task[]){
    this.pendingTasks = state.filter(task=>!task.completed).length

  }

  cleanCompleteTasks(){
    const action = new CleanCompletedTasks();
    this.store.dispatch(action);
  }

  toggleAll(){
    const action = new MarkAllTasks(this.toggle);
    this.store.dispatch(action);
    this.toggle = !this.toggle;
  }
  addTask() {
    if (this.inputTask.valid) { }
    const action = new AddTask(this.inputTask.value);
    this.store.dispatch(action);
    this.inputTask.setValue('');
  }

}
