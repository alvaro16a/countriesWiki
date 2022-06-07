import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  title = 'The Countries Wiki';
  @Output() newSearchEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  nameCountry="";

  startNewSearch(value: string) {
    this.newSearchEvent.emit(value);
  }

}
