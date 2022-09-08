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
  regions = ['','East','West','North','South','Midwest','Southwest']
  selectedRegion = '';
  changeRegion (target: EventTarget | null){
    this.selectedRegion = (<HTMLSelectElement>target).value;
  }
  changeRegionString = (value : string) : void =>{
    console.log("setting region", value)
    this.selectedRegion = value;
  }

  //Update this value to reflect your own free trial environment's URL.
  TS_URL = 'https://se-thoughtspot-cloud.thoughtspot.cloud/#/'

  constructor() {

    //Iniate connection. In this case AuthType.None means we will be prompted with a login screen
    init({
      thoughtSpotHost: this.TS_URL,
      authType: AuthType.None,
    });
  }

}
