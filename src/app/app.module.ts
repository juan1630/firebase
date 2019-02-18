import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeEditComponent } from './components/heroe-edit.component';
import { FormsModule } from '@angular/forms';

import { HeroesService } from './services/heroes.service';

import { app_routing } from './app.routes';
import { KeysPipe } from './pipes/keys.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeEditComponent,
    KeysPipe   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    app_routing
    
  ],
  providers: [ 
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
