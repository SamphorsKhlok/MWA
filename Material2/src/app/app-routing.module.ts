import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './admin/login/login.component';
import { Page404Component } from './admin/page-404/page-404.component';

// pages
import { HomeComponent } from './pages/home/home.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { CardsComponent } from './pages/cards/cards.component';
import { TablesComponent } from './pages/tables/tables.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  // { path: 'defauld', component: AppComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'home', component: HomeComponent},
  { path: 'buttons', component: ButtonsComponent},
  { path: 'cards', component: CardsComponent},
  { path: 'tables', component: TablesComponent},
  { path: 'login', component: LoginComponent},
  { path: 'page-404', component: Page404Component},
  { path: '**', pathMatch: 'full', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }