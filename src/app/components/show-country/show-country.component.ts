import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styleUrls: ['./show-country.component.sass']
})
export class ShowCountryComponent implements OnInit {

  @Input() country:any;
  constructor() { }

  ngOnInit(): void {
  }

}
