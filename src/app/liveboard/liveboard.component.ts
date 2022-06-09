import { Component, OnInit } from '@angular/core';
import { LiveboardEmbed, init, AuthType } from '@thoughtspot/visual-embed-sdk';

@Component({
  selector: 'app-liveboard',
  templateUrl: './liveboard.component.html',
  styleUrls: ['./liveboard.component.css']
})
export class LiveboardComponent implements OnInit {

  constructor() { 
    init({
      thoughtSpotHost: 'https://se-thoughtspot-cloud.thoughtspot.cloud/#/',
      authType: AuthType.None,
    });
  }

  ngOnInit(): void {
    const tsDiv = document.getElementById('liveboardDiv')!;
    const liveboardEmbed = new LiveboardEmbed(tsDiv, {
        liveboardId: 'db8e2ba2-6876-4193-898f-84608fbdfea3',
        frameParams: {
            width: '100%',
            height: '100%',
        },
    });
    liveboardEmbed.render();
  }
}
