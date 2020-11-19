import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { FilActuComponent } from './pages/fil-actu/fil-actu.component';

const routes: Routes = [
  //// PAGE CONNECTION
  { path: 'connexion', component: ConnexionComponent },

  //// PAGE FIL ACTUALITES
  { path: 'fil-actu', component: FilActuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
