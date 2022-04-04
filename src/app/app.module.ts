import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PalmeritaComponent } from './palmerita/palmerita.component';

@NgModule({
  declarations: [
    AppComponent,
    PalmeritaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
