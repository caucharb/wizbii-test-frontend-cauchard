import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FilActuService {

  optionRequete = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Authorization: 'Bearer ' + this.authService.token
    })
  };

  API_URL = './assets/JsonData/apiMockeeDatas.json';

  // le constructeur pour obtenir un instance de HttpClient
  constructor(private httpClient: HttpClient,
              private authService: AuthService) {
}

  // Cette fonction permets d'obtenir tous les actualités d'une copie de l'API en JSON dans le dossier ASSET
  getAllActuMockee() {
    this.API_URL = './assets/JsonData/apiMockeeDatas.json';
    return this.httpClient.get(this.API_URL);
  }

  // Cette fonction permets d'obtenir tous les actualités de l'API
  getAllActu() {
    this.API_URL = 'https://api.wizbii.com/v2/dashboard/?direction=newest';
    return this.httpClient.post(this.API_URL, {}, this.optionRequete);
  }
}
