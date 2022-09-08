import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LiveboardComponent } from './liveboard/liveboard.component';
import { VizComponent } from './viz/viz.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ResizableComponent } from './resizable/resizable.component';
import { ChartjsvizComponent } from './chartjsviz/chartjsviz.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LiveboardComponent,
    VizComponent,
    ResizableComponent,
    ChartjsvizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
