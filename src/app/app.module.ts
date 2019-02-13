import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeEditComponent } from './components/heroe-edit.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

import { HeroesService } from './services/heroes.service';

import { app_routing } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeEditComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    app_routing,
    HttpClient
  ],
  providers: [ 
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
