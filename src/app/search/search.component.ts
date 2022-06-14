import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

//Load SearchEmbed from ThoughtSpot SDK
import { SearchEmbed } from '@thoughtspot/visual-embed-sdk';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('search') search!: ElementRef;

  ngOnInit(): void {

  }
  ngAfterViewInit() {

    const tsDiv = this.search.nativeElement;
    // Render Search into template div. 
    // Note that this is where you can include optional parameters like worksheet id. 
    const searchEmbed = new SearchEmbed(tsDiv, {
        frameParams: {
            width: '100%',
            height: '100%',
        },
    });
    searchEmbed.render();
  }


}
