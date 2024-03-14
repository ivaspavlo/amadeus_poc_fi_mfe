import { Routes } from '@angular/router';
import { TestComponent } from './pages/test/test.component';
import { AppComponent } from './app.component';
import { provideState } from '@ngrx/store';
import { counterListReducer } from './state/counter/counter.reducer';

export const FI_MFE_ROUTES: Routes = [
  {
    path: '',
    component: AppComponent,
    providers: [
      provideState({ name: 'counterList', reducer: counterListReducer })
    ],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'test' },
      { path: 'test', component: TestComponent }
    ]
  }
];
