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
      thoughtSpotHost: 'https://my1.thoughtspot.cloud/#/',
      authType: AuthType.None,
    });
  }

  ngOnInit(): void {
    const tsDiv = document.getElementById('liveboardDiv')!;
    const liveboardEmbed = new LiveboardEmbed(tsDiv, {
        liveboardId: '200d4f78-07ad-407e-b35b-191a5cf489b6',
        frameParams: {
            width: '100%',
            height: '100%',
        },
    });
    liveboardEmbed.render();
  }
}
