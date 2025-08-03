
import { createReducer, on } from '@ngrx/store';
import { Task } from './to-do.action';
import * as TodoActions from './to-do.action';

export interface ToDoState {
  tasks: Task[];
  loading: boolean;
  error: any;
}

export const initialState: ToDoState = {
  tasks: [],
  loading: false,
  error: null
};

export const ToDoReducer = createReducer(
  initialState,
  on(TodoActions.addTask, (state, { task }) => ({
    ...state,
     tasks: [...state.tasks, task]
  })),
  on(TodoActions.deleteTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter(task => task.id !== id)
  })),
  on(TodoActions.toggleTask, (state, { id, completed }) => ({
    ...state,
    tasks: state.tasks.map(task =>
      task.id === id ? { ...task, completed } : task
    )
  })),
  on(TodoActions.loadTasksSuccess, (state, { tasks }) => ({
    ...state,
    tasks,
    loading: false
  })),
  on(TodoActions.loadTasksFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);
