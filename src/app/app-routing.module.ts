import { BloodborneComponent } from './pages/bloodborne/bloodborne.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { DialogsComponent } from './pages/dialogs/dialogs.component';


const routes: Routes = [
  { path: '', component: BloodborneComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'dialogs', component: DialogsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
