import { Injectable } from '@angular/core';
import { City } from '../models/city.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private cities: City[] = [
    { name: 'Granada', countryIso: 'ES', temperature: 24, weather: 'Clear', humidity: 30, wind: 10 },
    { name: 'Madrid', countryIso: 'ES', temperature: 22, weather: 'Cloud', humidity: 50, wind: 15 },
    { name: 'Barcelona', countryIso: 'ES', temperature: 20, weather: 'Rain', humidity: 70, wind: 20 },
    { name: 'Valencia', countryIso: 'ES', temperature: 26, weather: 'Clear', humidity: 40, wind: 12 },
    { name: 'Sevilla', countryIso: 'ES', temperature: 28, weather: 'Clear', humidity: 35, wind: 8 }
  ];

  constructor(private http: HttpClient) {
  }

  getCities(): City[] {
    return this.cities;
  }

  getWeatherByCity(city: string) {
    const url = `${environment.weatherApiUrl}weather?q=${city}&appid=${environment.weatherApiKey}&units=metric`;
    return this.http.get(url);
  }
}
