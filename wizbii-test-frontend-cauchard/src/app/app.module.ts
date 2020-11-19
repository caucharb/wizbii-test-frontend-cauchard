// Modules
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Pages
import { AppComponent } from './app.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { FilActuComponent } from './pages/fil-actu/fil-actu.component';

// Services
import { AuthService } from './Services/auth.service';
import { FilActuService } from './Services/fil-actu.service';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    FilActuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    FilActuService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
