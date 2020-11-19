import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilActuComponent } from './fil-actu.component';
import { AppRoutingModule } from '../../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { FilActuService } from '../../services/fil-actu.service';
import { DatePipe } from '@angular/common';

describe('FilActuComponent', () => {
  let component: FilActuComponent;
  let serviceA: AuthService;
  let fixture: ComponentFixture<FilActuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MaterialModule,
        BrowserAnimationsModule
      ],
      declarations: [
        FilActuComponent
      ],
      providers: [
        AuthService,
        FilActuService,
        DatePipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilActuComponent);
    component = fixture.componentInstance;
    serviceA = fixture.debugElement.injector.get(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
