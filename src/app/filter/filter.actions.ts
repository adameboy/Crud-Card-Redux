import { Action } from '@ngrx/store';


export const SET_FILTER = '[Filter] Set Filter';

export type validFilters = 'todos' | 'completados' | 'pendientes';

export class SetFilter implements Action {
    readonly type = SET_FILTER;
    constructor(public filter: validFilters) { }
}

export type Actions = SetFilter;