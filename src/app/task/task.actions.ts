import { Action } from "@ngrx/store";

export const ADD_TASK = '[TASK] Add Task';
export const MARK_TASK = '[TASK] Mark Task';
export const DELETE_TASK = '[TASK] Delete Task'
export const EDIT_TASK = '[TASK] Edit Task'
export const MARK_ALL_TASKS = '[TASK] Mark All Tasks'
export const CLEAN_COMPLETED_TASKS = '[TASK] Clean Completed Tasks'
export class AddTask implements Action {
    readonly type = ADD_TASK;
    constructor(public texto: string) { }
}

export class MarkTask implements Action {
    readonly type = MARK_TASK;
    constructor(public id: number) { }
}

export class DeleteTask implements Action {
    readonly type = DELETE_TASK;
    constructor(public id: number) { }
}

export class EditTask implements Action {
    readonly type = EDIT_TASK;
    constructor(public id: number, public title: string){}
}

export class MarkAllTasks implements Action{
    readonly type = MARK_ALL_TASKS;
    constructor(public completado:boolean){}
}

export class CleanCompletedTasks implements Action{
    readonly type = CLEAN_COMPLETED_TASKS
}


export type Acciones = AddTask |
    MarkTask |
    DeleteTask|
    MarkAllTasks|
    CleanCompletedTasks|
    EditTask;