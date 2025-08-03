import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../app/toDo/to-do.action';
import * as ToDoActions from '../app/toDo/to-do.action';
import * as fromToDo from '../app/toDo/to-do.selectors';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule , FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  tasks$!: Observable<Task[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<any>;

  newTaskTitle: string = '';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ToDoActions.loadTasks());
    this.tasks$ = this.store.select(fromToDo.selectAllTasks);
    this.loading$ = this.store.select(fromToDo.selectLoading);
    this.error$ = this.store.select(fromToDo.selectError);
  }

  addTask() {
    if (this.newTaskTitle.trim()) {
      const task: Task = {
        id: Math.random().toString(), // مؤقتًا
        title: this.newTaskTitle,
        completed: false
      };
      this.store.dispatch(ToDoActions.addTask({ task }));
      this.newTaskTitle = '';
    }
  }

  deleteTask(id: string) {
    this.store.dispatch(ToDoActions.deleteTask({ id }));
  }

  toggleTask(task: Task) {
    this.store.dispatch(ToDoActions.toggleTask({ id: task.id, completed: !task.completed }));
  }
}





// import { CommonModule  } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// interface Task {
//   title: string;
//   completed: boolean;
// }

// @Component({
//   selector: 'app-root',
//   imports: [CommonModule , FormsModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   newTask: string = '';
//   tasks: Task[] = [];

//   addTask() {
//     if (!this.newTask.trim()) return;

//     this.tasks.push({
//       title: this.newTask.trim(),
//       completed: false,
//     });

//     this.newTask = '';
//   }

//   deleteTask(index: number) {
//     this.tasks.splice(index, 1);
//   }

// }
