import { Component } from '@angular/core';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public countries:Array<any>=[];
  singleCountry=false;

  constructor(private countriesService:CountriesService){
    this.countriesService.getCoutries("")
    .subscribe((response: any) => {
      this.countries = response;
      if(response.length == 1){
        this.singleCountry=true;
      }else{
        this.singleCountry=false;
      }
      
    })
  }

  addKeywords(newKeyword: string) {
    this.countriesService.getCoutries(newKeyword)
      .subscribe((response: any) => {
        this.countries = response;
        if(response.length == 1){
          this.singleCountry=true;
        }else{
          this.singleCountry=false;
        }
        
      })
  }

}
