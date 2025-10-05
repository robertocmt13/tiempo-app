import { Component, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../../../models/city.model';

@Component({
  selector: 'app-city-list',
  standalone: true,
  imports: [],
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent {
  @Input() cities: City[] = [];
  @Input() hasSearched: boolean = false;
  @Output() citySelected = new EventEmitter<City>();

  selectCity(city: City) {
    this.citySelected.emit(city);
  }
}
