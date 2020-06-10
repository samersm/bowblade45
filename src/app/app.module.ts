import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BloodborneComponent } from './pages/bloodborne/bloodborne.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { DungeonsComponent } from './pages/dungeons/dungeons.component';
import { AddDungeonComponent } from './pages/dungeons/add-dungeon/add-dungeon.component';

@NgModule({
  declarations: [
    AppComponent,
    BloodborneComponent,
    NavbarComponent,
    DungeonsComponent,
    AddDungeonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
