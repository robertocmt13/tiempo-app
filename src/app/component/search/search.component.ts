import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CityListComponent } from './city-list/city-list.component';
import { WeatherService } from '../../service/weather.service';
import { City } from '../../models/city.model';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CityListComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  cityInput: string = '';
  filteredCities: City[] = [];
  hasSearched: boolean = false;
  @Output() citySelected = new EventEmitter<City>();

  constructor(private weatherService: WeatherService) {}

  searchCity() {
    if (!this.cityInput || this.cityInput.trim() === '') {
      this.hasSearched = false;
      this.filteredCities = [];
      return;
    }
    this.hasSearched = true;
    this.filteredCities = this.weatherService.getCities()
      .filter(city => city.name.toLowerCase().includes(this.cityInput.toLowerCase()));
  }

  onCitySelected(city: City) {
    this.citySelected.emit(city);
    this.filteredCities = [];
    this.hasSearched = false;
    this.cityInput = city.name;
  }
}
