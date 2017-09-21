import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StudentsComponent } from './students/students.component';
import { myRoutes} from "./app.routers";
import { ProfileComponent } from './profile/profile.component';
import {ProfileGuard} from "./profile/profileGuard";
import {DbService} from "./db.service";
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StudentsComponent,
    ProfileComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    myRoutes
  ],
  providers: [ProfileGuard, DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
