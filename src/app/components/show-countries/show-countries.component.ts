import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-countries',
  templateUrl: './show-countries.component.html',
  styleUrls: ['./show-countries.component.sass']
})
export class ShowCountriesComponent implements OnInit {

  @Input() countries:any;
  constructor() { }

  ngOnInit(): void {
  }

}
