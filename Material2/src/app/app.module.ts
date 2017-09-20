import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LayoutModule } from 'ng2-flex-layout';
import { FlexLayoutModule } from '@angular/flex-layout';


// Angular Material 2 Setup
import { MaterialModule } from '@angular/material';
import 'hammerjs' ; // required for angular material


// ********************** ROUTING ********************* //
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './admin/login/login.component';
import { Page404Component } from './admin/page-404/page-404.component';
import { DialogComponent } from './dialog/dialog.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { MainSidenavComponent } from './main-sidenav/main-sidenav.component';
import { CardsComponent } from './pages/cards/cards.component';
import { TablesComponent } from './pages/tables/tables.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    Page404Component,
    DialogComponent,
    HomeComponent,
    ButtonsComponent,
    MainSidenavComponent,
    CardsComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
