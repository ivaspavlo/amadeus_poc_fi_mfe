import { Routes } from '@angular/router';
import { TestComponent } from './pages/test/test.component';

export const FI_MFE_ROUTES: Routes = [
  { path: '', component: TestComponent, pathMatch: 'full' }
];
