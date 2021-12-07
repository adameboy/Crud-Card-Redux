import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddTask } from './task/task.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-redux';

  constructor(private store:Store){
    this.store.subscribe(state=>console.log(state));
  }
}
