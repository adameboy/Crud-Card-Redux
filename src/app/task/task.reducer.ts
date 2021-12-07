import * as fromTask from './task.actions';
import { Task } from '../models/task.model';
import { Action } from '@ngrx/store';

const task1 = new Task('Salvar el mundo');
const task2 = new Task('Lavar la ropa',true);
const task3 = new Task('ir a la escuela');
const task4 = new Task('ir al supermercado',true);
const task5 = new Task('Another task');



export const estadoInicial: Task[] = [task1, task2, task3,task4,task5];
export function taskReducer(state: Task[] = estadoInicial, action: Action): Task[] {
    const actionTypes = action as fromTask.Acciones;
    switch (actionTypes.type) {
        case fromTask.ADD_TASK:
            const task = new Task(actionTypes.texto);
            return [...state, task];

        case fromTask.MARK_TASK:
            return state.map((task) => {
                if (actionTypes.id === task.id) {
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }
                return task;
            })
        case fromTask.DELETE_TASK:
            return state.filter(task => task.id !== actionTypes.id);
        case fromTask.EDIT_TASK:
            return state.map(task => {
                if (actionTypes.id === task.id) {
                    return {
                        ...task,
                        texto: actionTypes.title
                    }
                }
                return task;
            })
        
        case fromTask.MARK_ALL_TASKS:
            return state.map(task=>{
                return {
                    ...task,
                    completed: actionTypes.completado
                }
            })

        case fromTask.CLEAN_COMPLETED_TASKS:
            return state.filter(task=>!task.completed);
        default:
            return state;
    }

}