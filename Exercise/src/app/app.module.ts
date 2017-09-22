import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpService} from "./http.service";
import { MypostComponent } from './mypost/mypost.component';
import {HttpModule} from "@angular/http";
import { MypiperPipe } from './mypiper.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MypostComponent,
    MypiperPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
