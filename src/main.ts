import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app/app-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'zone.js';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(AppRoutingModule, FormsModule, ReactiveFormsModule),
  ],
}).catch((err) => console.error(err));
