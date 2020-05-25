import { BloodborneComponent } from './pages/bloodborne/bloodborne.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';


const routes: Routes = [
  { path: '', component: BloodborneComponent },
  { path: 'navbar', component: NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
