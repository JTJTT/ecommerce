import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';

export const routes: Routes = [
    {
        path:"homepage",
        component: HomepageComponent
    },
    {
        path:"**",
        redirectTo: 'home',
    }
];
