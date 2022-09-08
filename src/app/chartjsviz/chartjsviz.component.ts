import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import * as Highcharts from 'highcharts';
import Wordcloud from 'highcharts/modules/wordcloud';
Wordcloud(Highcharts)
@Component({
  selector: 'app-chartjsviz',
  templateUrl: './chartjsviz.component.html',
  styleUrls: ['./chartjsviz.component.css']
})

export class ChartjsvizComponent implements OnInit {
  @Input() setRegion!: (value: string) => void;

  Highcharts: typeof Highcharts = Highcharts;
  data: any =  [{
        name: 'Lorem',
        weight: 3
    }, {
        name: 'Ipsum',
        weight: 2
    }, {
        name: 'Dolor',
        weight: 1
    }]
  chartOptions: Highcharts.Options = {
    series: [{
      data: this.data,
      type: 'wordcloud',
      events: {
        click: this.handleClick.bind(this)
      }
    }],
  };
  handleClick(event: any) {
    this.setRegion(event.point.name);
    return true;

  }
  constructor() { }
  ngOnInit(): void {
    console.log(this,this.setRegion);

    var worksheet = "e433086d-a93d-460e-b0ed-55a3ee669d80"
    var query = "[Region][Sales]"
    var url = "https://se-thoughtspot-cloud.thoughtspot.cloud/callosum/v1/tspublic/v1/searchdata?query_string="+encodeURIComponent(query)+
    "&data_source_guid="+worksheet+"&batchsize=-1&pagenumber=-1&offset=-1&formattype=COMPACT"
    fetch(url,
    {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method:'POST',
        credentials: 'include',
    })
    .then(response => response.json()).then(
        data => {
          const newData = []
          console.log("got some data back",data)
          for (var row of data.data){
            newData.push({
              name: row[0],
              weight: row[1]
            })
          }
          this.chartOptions = {
            series: [{
              data: newData,
              type: 'wordcloud',
              events: {
                click: this.handleClick.bind(this)
              }
            }],
          };
          this.data = newData
    })
  }

}
