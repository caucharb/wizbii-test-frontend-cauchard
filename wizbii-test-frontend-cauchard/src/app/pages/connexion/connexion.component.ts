import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  hide = true;

  messageErreur: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  onSubmit(connexionF: NgForm) {
    // Arret si le formulaire n'est pas valide
    if (connexionF.invalid) {
      return;
    }

    // Connection avec les identifiants saisis
    this.authService.loginMockee(connexionF.value.identifiant, connexionF.value.password)
      .subscribe(
        res => {
          // Récupération du token dans une variable du service
          this.authService.token = res['access-token'];
          // Affichage de la page des actualités
          this.router.navigate(['/fil-actu']);
        },
        error => {
          // Affichage du message d'erreur
          this.messageErreur = 'Erreur lors de l\'authentification';
        }
      );
  }
}
