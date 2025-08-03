import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, deleteDoc, doc, getDocs, updateDoc } from '@angular/fire/firestore';
import { collectionData } from '@angular/fire/firestore';
import { Task } from './toDo/to-do.action';
import { from, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private firestore: Firestore) {}

  getTasks(): Observable<Task[]> {
    const tasksRef = collection(this.firestore, 'tasks');
    return collectionData(tasksRef, { idField: 'id' }) as Observable<Task[]>;
  }

  addTask(task: Task) {
    const tasksRef = collection(this.firestore, 'tasks');
    return from(addDoc(tasksRef, task));
  }

  deleteTask(id: string) {
    const taskRef = doc(this.firestore, `tasks/${id}`);
    return from(deleteDoc(taskRef));
  }

  toggleTask(id: string, completed: boolean) {
    const taskRef = doc(this.firestore, `tasks/${id}`);
    return from(updateDoc(taskRef, { completed }));
  }
}
