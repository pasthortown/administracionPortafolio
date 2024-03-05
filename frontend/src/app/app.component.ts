import { Component, OnInit } from '@angular/core';
import { environment } from './../../src/environments/environment';
import { BackendService } from './services/backend.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
  api = environment.api;

  constructor( private backendService: BackendService, private spinner: NgxSpinnerService) {}

  prueba() {

  }
}
