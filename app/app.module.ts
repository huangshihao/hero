import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';

//ajax request data
import { InMemoryDataService } from './in-memory-data.service';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { routing } from './app.routing';

import { HeroService } from './hero.service';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [ 
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent 
  ],
  providers:[
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
