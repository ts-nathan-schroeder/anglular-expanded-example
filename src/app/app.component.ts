import { Component } from '@angular/core';
import { init, AuthType } from '@thoughtspot/visual-embed-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  search = false;

  constructor() {
    init({
      thoughtSpotHost: 'https://my1.thoughtspot.cloud/#/',
      authType: AuthType.None,
    });
  }

}
