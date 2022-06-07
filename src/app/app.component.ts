import { Component } from '@angular/core';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public countries: Array<any> = [];
  numLimitCountries: number = 20;
  singleCountry = false;
  zeroCountries = true;
  limitCountries = false;
  manycountries=false;
  constructor(private countriesService: CountriesService) { }

  addKeywords(newKeyword: string) {
    this.countriesService.getCoutries(newKeyword)
      .subscribe((response: any) => {
        this.countries = response;
        if (response.length == 0) {
          this.zeroCountries = true;
          this.singleCountry = false;
          this.limitCountries = false;
          this.manycountries=false;
        } else if (response.length == 1) {
          this.zeroCountries = false;
          this.singleCountry = true;
          this.limitCountries = false;
          this.manycountries=false;
        } else if (response.length > 1 && response.length <= this.numLimitCountries) {
          this.zeroCountries = false;
          this.singleCountry = false;
          this.limitCountries = true;
          this.manycountries=false;
        } else {
          this.zeroCountries = false;
          this.singleCountry = false;
          this.limitCountries = false;
          this.manycountries=true;
        }
      });
  }
}
