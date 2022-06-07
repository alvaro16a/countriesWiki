import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ShowCountryComponent } from './components/show-country/show-country.component';
import { ShowCountriesComponent } from './components/show-countries/show-countries.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ShowCountryComponent,
    ShowCountriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
