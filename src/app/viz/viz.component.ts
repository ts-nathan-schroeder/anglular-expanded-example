import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

//Load LiveboardEmbed from ThoughtSpot SDK
import { HostEvent, LiveboardEmbed, RuntimeFilterOp } from '@thoughtspot/visual-embed-sdk';
@Component({
  selector: 'app-viz',
  templateUrl: './viz.component.html',
  styleUrls: ['./viz.component.css']
})
export class VizComponent implements OnInit {
  @ViewChild('viz') viz!: ElementRef;
  

  constructor() { 
  }
  @Input() liveboardId!: string;
  @Input() vizId!: string;
  @Input() regionFilter!: string;

  liveboardEmbed: LiveboardEmbed | undefined;

  ngOnInit(): void {
  }
  ngOnChanges(changes: any) {
    if (changes.regionFilter){
      var region = changes.regionFilter.currentValue
      if (this.liveboardEmbed){

        // This is the ideal approach but there is a temporary bug.


        // this.liveboardEmbed.trigger(HostEvent.UpdateRuntimeFilters,[{
        //   columnName: 'Region',
        //   operator: RuntimeFilterOp.EQ,
        //   values: [ region ]
        // }])

        //For now, this does work, but is not nearly as performant as the component will re-render each time the filter is updated.
        this.liveboardEmbed = new LiveboardEmbed(this.viz.nativeElement, {
          liveboardId: this.liveboardId,
          vizId: this.vizId,
          frameParams: {
              width: '100%',
              height: '100%',
          },
          runtimeFilters: [{
            columnName: 'Region',
            operator: RuntimeFilterOp.EQ,
            values: [ region ]
          }]
        });
        this.liveboardEmbed.render();

      }
    }

  }
  ngAfterViewInit() {

    const tsDiv = this.viz.nativeElement;
    this.liveboardEmbed = new LiveboardEmbed(tsDiv, {
          liveboardId: this.liveboardId,
          vizId:this.vizId,
          frameParams: {
              width: '100%',
              height: '100%',
          },
      });
      this.liveboardEmbed.render();
    }
}
