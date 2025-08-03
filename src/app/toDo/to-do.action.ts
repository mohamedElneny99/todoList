import {createAction,props} from '@ngrx/store';


export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export const addTask= createAction(
  '[ToDo] Add Task', props<{ task: Task }>()
);

export const deleteTask = createAction(
  '[ToDo] Delete Task', props<{ id: string }>()
);

export const toggleTask = createAction(
  '[ToDo] Toggle Task', props<{ id: string, completed: boolean }>()
);

export const loadTasks = createAction(
  '[ToDo] Load Tasks'
);

export const loadTasksSuccess = createAction(
  '[ToDo] Load Tasks Success', props<{ tasks: Task[] }>()
);

export const loadTasksFailure = createAction(
  '[ToDo] Load Tasks Failure', props<{ error: any }>()
);


