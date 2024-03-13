import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { FI_MFE_ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(FI_MFE_ROUTES)
  ]
};
