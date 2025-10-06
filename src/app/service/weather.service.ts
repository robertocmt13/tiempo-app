import { Injectable } from '@angular/core';
import { City } from '../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private cities: City[] = [
    { name: 'Granada', countryIso: 'ES', temperature: 24, weather: 'Sunny', humidity: 30, wind: 10 },
    { name: 'Madrid', countryIso: 'ES', temperature: 22, weather: 'Cloudy', humidity: 50, wind: 15 },
    { name: 'Barcelona', countryIso: 'ES', temperature: 20, weather: 'Rainy', humidity: 70, wind: 20 },
    { name: 'Valencia', countryIso: 'ES', temperature: 26, weather: 'Sunny', humidity: 40, wind: 12 },
    { name: 'Sevilla', countryIso: 'ES', temperature: 28, weather: 'Sunny', humidity: 35, wind: 8 }
  ];

  constructor() {
  }

  getCities(): City[] {
    return this.cities;
  }
}
