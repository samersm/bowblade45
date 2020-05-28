import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BloodborneComponent } from './pages/bloodborne/bloodborne.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { DungeonsComponent } from './pages/dungeons/dungeons.component';

@NgModule({
  declarations: [
    AppComponent,
    BloodborneComponent,
    NavbarComponent,
    DungeonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
