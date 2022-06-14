import { Component } from '@angular/core';
import { init, AuthType } from '@thoughtspot/visual-embed-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  
  //Simple true/false. If true show liveboard. False show search.
  search = false;

  //Update this value to reflect your own free trial environment's URL.
  TS_URL = 'https://my1.thoughtspot.cloud/#/'

  constructor() {

    //Iniate connection. In this case AuthType.None means we will be prompted with a login screen
    init({
      thoughtSpotHost: this.TS_URL,
      authType: AuthType.None,
    });
  }

}
