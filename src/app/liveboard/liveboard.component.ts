import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

//Load LiveboardEmbed from ThoughtSpot SDK
import { LiveboardEmbed,HostEvent, RuntimeFilterOp } from '@thoughtspot/visual-embed-sdk';

@Component({
  selector: 'app-liveboard',
  templateUrl: './liveboard.component.html',
  styleUrls: ['./liveboard.component.css']
})
export class LiveboardComponent implements OnInit {
  @ViewChild('liveboard') liveboard!: ElementRef;
  @Input() regionFilter!: string;
  @Input() liveboardId!: string;
  liveboardEmbed: LiveboardEmbed | undefined;

  ngOnInit(): void {

  }
  ngOnChanges(changes: any) {
    if (changes.regionFilter){
      var region = changes.regionFilter.currentValue
      if (this.liveboardEmbed){

        // This is the ideal approach but there is a temporary bug.
        this.liveboardEmbed.trigger(HostEvent.UpdateRuntimeFilters,[{
          columnName: 'Region',
          operator: RuntimeFilterOp.EQ,
          values: [ region ]
        }])
      }
    }

  }
  ngAfterViewInit() {

    const tsDiv = this.liveboard.nativeElement;
    // Render Liveboard into template div. 
    // Note the liveboardId refers to the liveboard internal GUID. In this case, the free trial Liveboard.
  
    this.liveboardEmbed = new LiveboardEmbed(tsDiv, {
        liveboardId: this.liveboardId,
        frameParams: {
            width: '100%',
            height: '100%',
        },
    });
    this.liveboardEmbed.render();
  }
}
