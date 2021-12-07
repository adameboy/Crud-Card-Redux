import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task.model';
import { validFilters } from './filter.actions';

@Pipe({
  name: 'filterTasks'
})
export class FilterPipe implements PipeTransform {

  transform(tasks: Task[], filter: validFilters): Task[] {
    switch (filter) {
      case 'completados':
        return tasks.filter(task => task.completed);
      case 'pendientes':
        return tasks.filter(tasks => !tasks.completed)
      default:
        return tasks
    }
  }

}
