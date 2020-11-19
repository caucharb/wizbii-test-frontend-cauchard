import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wizbii-test-frontend-cauchard';

  // personne authentifiée ou non
  isAuth: any;

  constructor(private authService: AuthService) {
    // On récupère la personne de connectée
    this.authService.isAuth.subscribe(res => {
      this.isAuth = res;
    });
  }
}
