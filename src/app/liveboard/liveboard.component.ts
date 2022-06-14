import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LiveboardEmbed } from '@thoughtspot/visual-embed-sdk';

@Component({
  selector: 'app-liveboard',
  templateUrl: './liveboard.component.html',
  styleUrls: ['./liveboard.component.css']
})
export class LiveboardComponent implements OnInit {
  @ViewChild('liveboard') liveboard!: ElementRef;

  constructor() { 

  }

  ngOnInit(): void {

  }
  ngAfterViewInit() {

    const tsDiv = this.liveboard.nativeElement;
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
