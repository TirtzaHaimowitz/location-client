import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditLocationComponent } from './edit-location/edit-location.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input'; 
import {FormsModule} from '@angular/forms'
import { HttpClientModule }    from '@angular/common/http';
import { LocationService } from './LocationService';
import { DistanceComponent } from './distance/distance.component';
import { Routes, RouterModule } from '@angular/router';

import {FullscreenOverlayContainer, OverlayContainer} from '@angular/cdk/overlay';

const appRoutes: Routes = [
  { path: 'distance/:obj', component: DistanceComponent },
  { path: 'distance', component: DistanceComponent }];
 
@NgModule({
  declarations: [
    AppComponent,
    EditLocationComponent,
    DistanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, BrowserAnimationsModule, MatButtonModule,MatInputModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [LocationService,  {provide: OverlayContainer, useClass: FullscreenOverlayContainer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
