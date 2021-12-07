import { ActionReducerMap } from "@ngrx/store";
import { Task } from "./models/task.model";
import { taskReducer } from './task/task.reducer';
import { filterReducer } from './filter/filter.reducer';
import { validFilters } from './filter/filter.actions';

export interface AppState {
    tasks: Task[];
    filter:validFilters;
}


export const appReducers:ActionReducerMap<AppState> = {
    tasks:taskReducer,
    filter:filterReducer
}
