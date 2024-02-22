import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WLComponent } from './WL/WL.component';
import { NWLComponent } from './NWL/nwl.component';
import { BCComponent } from './BC/BC.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchBoxComponent } from './searchbox/searchbox.component';
import { BLComponent } from './BL/BL.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    WLComponent,
    NWLComponent,
    BLComponent,
    BCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
