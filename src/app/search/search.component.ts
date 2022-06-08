import { Component, OnInit } from '@angular/core';
import { SearchEmbed, init, AuthType } from '@thoughtspot/visual-embed-sdk';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { 
    init({
      thoughtSpotHost: 'https://se-thoughtspot-cloud.thoughtspot.cloud/#/',
      authType: AuthType.None,
    });
  }

  ngOnInit(): void {
    const tsDiv = document.getElementById('thoughtspotDiv')!;
    const searchEmbed = new SearchEmbed(tsDiv, {
        frameParams: {
            width: '100%',
            height: '100%',
        },
    });
    searchEmbed.render();
  }

}
