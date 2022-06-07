import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  _url="https:restcountries.com/v3.1"

  constructor(private http:HttpClient) { 
    console.log('servcio vivo');
  }

  getCoutries(country:string){
    let header =new HttpHeaders;
    header.set('Type-Content','aplication/json')

    return this.http.get(`${this._url}/name/${country}`, {headers:header});
  }
}
