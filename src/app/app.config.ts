/*import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';


import:[
  FormsModule,
]

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
}; */

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';  // Correct route import
import {provideHttpClient} from "@angular/common/http";
// FormsModule should be imported in the appropriate module, not here.

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(),provideRouter(routes)]
};
