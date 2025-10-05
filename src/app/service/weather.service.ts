import { Injectable } from '@angular/core';
import { City } from '../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private cities: City[] = [
    { name: 'Granada', countryIso: 'ES', weather: 'Sunny', humidity: 30, wind: 10 },
    { name: 'Madrid', countryIso: 'ES', weather: 'Cloudy', humidity: 50, wind: 15 },
    { name: 'Barcelona', countryIso: 'ES', weather: 'Rainy', humidity: 70, wind: 20 },
    { name: 'Valencia', countryIso: 'ES', weather: 'Sunny', humidity: 40, wind: 12 },
    { name: 'Sevilla', countryIso: 'ES', weather: 'Sunny', humidity: 35, wind: 8 }
  ];

  constructor() {
  }

  getCities(): City[] {
    return this.cities;
  }
}
