import { provideRouter, Routes } from '@angular/router';
import { LandingPageComponent } from './features/course/landing-page/landing-page.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', redirectTo: 'landing-page', pathMatch: 'full' }, // Default route
    { path: 'landing-page', component: LandingPageComponent },  // Route for landing-page
];

bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)]
  });
  