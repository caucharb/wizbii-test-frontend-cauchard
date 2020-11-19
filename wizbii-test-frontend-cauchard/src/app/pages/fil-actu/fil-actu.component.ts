import { Component, OnInit, ViewChild } from '@angular/core';
import { FilActuService } from '../../Services/fil-actu.service';
import { AuthService } from '../../Services/auth.service';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fil-actu',
  templateUrl: './fil-actu.component.html',
  styleUrls: ['./fil-actu.component.css']
})
export class FilActuComponent implements OnInit {
  // Toutes les actualités
  allItems: any[];
  allRecipes: any[];
  // Personne authentifiée
  isAuth: any;

  panelOpenState = true;

  // Tableau de commentaires
  commentaires: any[] = [];

  // Formulaire d'ajout de commentaire
  @ViewChild('addCom') addCom: NgForm;

  constructor(private filActuService: FilActuService,
              private authService: AuthService,
              public datePipe: DatePipe) {
    this.authService.isAuth.subscribe(res => this.isAuth = res);
  }

  ngOnInit() {
    this.getAllActualites();
  }

  // Récupération de toutes les actualités pour l'affichage
  getAllActualites() {
    this.filActuService.getAllActuMockee().subscribe(
      (res) => {
        // On récupère tous les Items de la bdd
        this.allItems = res['feed_items']['feed_items'];
        // On récupère toutes les recettes de la bdd
        this.allRecipes = res['display_recipe']['feed_item_proxies'];
        // On trie les Items par rapport aux recettes
        this.allItems.sort((a, b) => {
          const recipeA = this.allRecipes.find(element => (element.id === a.id));
          const recipeB = this.allRecipes.find(element => (element.id === b.id));
          if (recipeA.position < recipeB.position) {
            return 0;
          } else {
            return 1;
          }
        });
      },
        (err) => console.log('Erreur de récupération des données', err.message)
    );
  }

  addCommentaire(form: NgForm, id: any) {
    const val = form.value;
    // On ajoute un commentaire au tableau des commentaires
    this.commentaires.push({id, commentaire: val.commentaire});
    // On réinitialise le formulaire
    this.addCom.resetForm({});
  }

  publicationCommentaire(id) {
    let findCom = false;
    // On regarde tous les commentaires pour voir si la publication a au moins un commentaire
    for (const eltCom of this.commentaires) {
      if (eltCom['id'] === id) {
        findCom = true;
        break;
      }
    }
    return findCom;
  }

  logout() {
    // Déconnecte la personne connectée
    this.authService.logout();
  }
}
