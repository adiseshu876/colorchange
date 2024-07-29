import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JoinPipe } from './events2/pipe';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorComponent } from './color/color.component';
import { ContentComponent } from './content/content.component';
import { PipesComponent } from './pipes/pipes.component';
import {HttpClientModule} from'@angular/common/http';
import { SomeservicesComponent } from './someservices/someservices.component';
import { JsonComponent } from './json/json.component';
import { EventsComponent } from './events/events.component';
import { Events2Component } from './events2/events2.component';
import { FormsComponent } from './forms/forms.component';
@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    ContentComponent,
    PipesComponent,
    SomeservicesComponent,
    JsonComponent,
    EventsComponent,
    Events2Component,JoinPipe, FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
