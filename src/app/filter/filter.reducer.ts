import { validFilters, Actions, SET_FILTER } from './filter.actions';
import { Action } from '@ngrx/store';


const initialState: validFilters = 'todos';



export function filterReducer(state = initialState, action: Action) {
    const actions = action as Actions;

    switch (action.type) {
        case SET_FILTER:
            return actions.filter;

        default: return state;
    }
}