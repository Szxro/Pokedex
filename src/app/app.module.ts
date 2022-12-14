import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { PrimeNGModule } from './prime-ng.module';
import { appRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  exports:[
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PrimeNGModule,
    ComponentsModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
