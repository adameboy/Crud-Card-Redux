import { Component, ElementRef, OnInit } from '@angular/core';
import { validFilters, SetFilter } from '../filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  valid_filters: validFilters [] = ['todos','completados','pendientes'];

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }

  setFilter(filter:validFilters){
    const action = new SetFilter(filter);
    this.store.dispatch(action);
  }

}
