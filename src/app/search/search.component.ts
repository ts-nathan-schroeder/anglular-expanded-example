import { Component, OnInit } from '@angular/core';
import { SearchEmbed } from '@thoughtspot/visual-embed-sdk';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { 

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
