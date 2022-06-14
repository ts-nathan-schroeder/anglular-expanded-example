import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SearchEmbed } from '@thoughtspot/visual-embed-sdk';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('search') search!: ElementRef;

  constructor() { 

  }
  ngOnInit(): void {

  }
  ngAfterViewInit() {

    const tsDiv = this.search.nativeElement;
    const searchEmbed = new SearchEmbed(tsDiv, {
        frameParams: {
            width: '100%',
            height: '100%',
        },
    });
    searchEmbed.render();
  }


}
