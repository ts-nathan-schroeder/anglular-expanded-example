import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

//Load LiveboardEmbed from ThoughtSpot SDK
import { EmbedEvent, HostEvent, LiveboardEmbed, RuntimeFilterOp } from '@thoughtspot/visual-embed-sdk';
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
  @Input() setRegion!: (value: string) => void;

  liveboardEmbed: LiveboardEmbed | undefined;

  ngOnInit(): void {
  }
  ngOnChanges(changes: any) {
    if (changes.regionFilter){
      var region = changes.regionFilter.currentValue
      if (this.liveboardEmbed){

        // This is the ideal approach but there is a temporary bug.

        //this does not work
        this.liveboardEmbed.trigger(HostEvent.UpdateRuntimeFilters,[{
          columnName: 'Region',
          operator: RuntimeFilterOp.EQ,
          values: [ region ]
        }])
        //this does work
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
  handleClick(event: any) {
    console.log("event",event)
    var attrs = event.data.clickedPoint.selectedAttributes as Array<any>
    for (var idx in attrs){
      var attribute = attrs[idx] as any;
      console.log(attribute,"attr")
      if (attribute.column.name == 'region'){
        this.setRegion(attribute.value)
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
      this.liveboardEmbed.on(EmbedEvent.VizPointClick,this.handleClick.bind(this))
    }

}

