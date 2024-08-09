import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { PuppyListComponent } from './puppy-list/puppy-list.component';
import {ImageUrlPipe} from "./image-url.pipe";
import { LandingPage } from './pages/landing/landing.page';
import { DetailPage } from './pages/detail/detail.page';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    PuppyListComponent,
    ImageUrlPipe,
    LandingPage,
    DetailPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
