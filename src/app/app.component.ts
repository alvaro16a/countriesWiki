import { Component } from '@angular/core';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'The Countries Wiki';
  public countries:Array<any>=[];
  singleCountry=false;

  constructor(private countriesService:CountriesService){}

}
