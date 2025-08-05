
// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import * as TodoActions from './to-do.action';
// import { catchError, map, mergeMap, Observable, of } from 'rxjs';
// import { Firestore, collectionData, collection } from '@angular/fire/firestore';
// import { Task } from './to-do.action';



// @Injectable()
// export class TodoEffects {
//   constructor(private actions$: Actions, private firestore: Firestore) {
//   }

//   loadTasks$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(TodoActions.loadTasks),
//       mergeMap(() => {
//         const tasksRef = collection(this.firestore, 'tasks');
//         return collectionData(tasksRef, { idField: 'id' }).pipe(
//           map((tasks) => TodoActions.loadTasksSuccess({ tasks: tasks as Task[] })),
//           catchError((error) => of(TodoActions.loadTasksFailure({ error })))
//         );
//       })
//     )
//   );
// }
