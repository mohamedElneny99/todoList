
import{ createSelector , createFeatureSelector } from '@ngrx/store';
import { ToDoState } from './to-do.reducer';

export const selectToDoState = createFeatureSelector<ToDoState>('todo');

export const selectAllTasks = createSelector(
  selectToDoState,
  (state: ToDoState) => state.tasks
);

export const selectLoading = createSelector(
  selectToDoState,
  (state: ToDoState) => state.loading
);

export const selectError = createSelector(
  selectToDoState,
  (state: ToDoState) => state.error
);
