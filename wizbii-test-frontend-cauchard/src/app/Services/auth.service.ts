import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  optionRequete = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  };

  private authenticatedUser: BehaviorSubject<any>;
  public isAuth: Observable<any>;
  public token: string;

  private API_URL = '';

  constructor(private router: Router, private httpClient: HttpClient) {
    // On se déconnecte avant de proposer la connection
    this.authenticatedUser = new BehaviorSubject<any>(null);
    this.isAuth = this.authenticatedUser.asObservable();
    this.logout();
  }

  // Cette fonction permets de se connecter à une copie de l'API en JSON dans le dossier ASSET
  loginMockee(authlogin, authpassword) {
    if (authlogin === 'decouverte+2@wizbii.com' && authpassword === 'decouverte') {
      this.API_URL = './assets/JsonData/apiMockeeConnexion.json';
    }
    return this.httpClient.get(this.API_URL).pipe(
      map(res => {
        this.authenticatedUser.next(res);
        return res;
      })
    );
  }

  // Cette fonction permets de se connecter à l'API de wizbii
  login(authlogin, authpassword) {
    const user: any = {username: authlogin, password: authpassword};
    this.API_URL = 'https://api.wizbii.com/v1/account/validate';
    return this.httpClient.post(this.API_URL, user, this.optionRequete).pipe(
      map(res => {
        this.authenticatedUser.next(res);
        return res;
      })
    );
  }

  // Cette fonction permets de se déconnecter à l'API de wizbii
  logout() {
    // On initialise les variables à null
    this.authenticatedUser.next(null);
    this.token = '';
    // Affiche la page de connexion
    this.router.navigate(['/connexion']);
  }

}


