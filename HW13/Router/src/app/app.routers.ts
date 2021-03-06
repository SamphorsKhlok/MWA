import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from "./homepage/homepage.component";
import { StudentsComponent } from "./students/students.component";
import { ProfileComponent} from "./profile/profile.component";
import {ProfileGuard} from "./profile/profileGuard";
import {ErrorComponent} from "./error/error.component";

const MY_ROUTES: Routes = [
  {path : '', component: HomepageComponent},
  {path : 'students', component: StudentsComponent},
  {path : 'error', component: ErrorComponent},
  {path : 'profile/:id', component: ProfileComponent, canActivate: [ProfileGuard]},

  //always has one for unidentifiable link
  {path: '**', redirectTo:'/error'}
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
