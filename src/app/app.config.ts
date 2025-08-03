import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {initializeApp} from '@angular/fire/app';
import { getFirestore } from '@angular/fire/firestore';
import { provideFirebaseApp } from '@angular/fire/app';
import { environment } from './environments/environment';
import {provideFirestore} from '@angular/fire/firestore';
import { routes } from './app.routes';
import { ToDoReducer } from './toDo/to-do.reducer';
import { provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { TodoEffects } from './toDo/to-do.effects';
import { provideAnimations } from '@angular/platform-browser/animations';


export const appConfig: ApplicationConfig = {
   providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)), // ✅ Firebase أولاً
    provideFirestore(() => getFirestore()),
    provideStore({ todo: ToDoReducer }),      // ✅ Store قبل Effects
    provideEffects([TodoEffects]),            // ✅ Effects بعد Store
    provideHttpClient(),
    provideAnimations()
  ]
};
