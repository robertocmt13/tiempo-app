import { Component, Input } from '@angular/core';
import { City } from '../../models/city.model';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css'
})
export class WeatherCardComponent {
  @Input() city!: City;
  weatherIcon: string = '';
  weatherIconColor: string = '';
  weatherStyle: string = '';
  fechaActual: string = '';

  constructor() { }

  ngOnInit(): void {
    this.obtenerFechaActual();
    this.setWeatherStyleAndIcon();
  }

  obtenerFechaActual(): void {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',   // "Monday"
      hour: 'numeric',   // "10"
      minute: '2-digit', // "30"
      hour12: true       // AM/PM
    };
    this.fechaActual = now.toLocaleString('en-US', options);

  }

  setWeatherStyleAndIcon(): void {
    switch (this.city.weather.toLowerCase()) {
      case 'sunny':
        this.weatherIcon = 'bi-sun-fill';
        this.weatherIconColor = 'text-warning';
        this.weatherStyle =  'background-sunny';
        break;
      case 'cloudy':
        this.weatherIcon = 'bi-cloud-fill';
        this.weatherIconColor = 'text-secondary';
        this.weatherStyle = 'background-cloudy';
        break;
      case 'rainy':
        this.weatherIcon = 'bi-cloud-drizzle';
        this.weatherIconColor = 'text-primary';
        this.weatherStyle = 'background-rainy';
        break;
      case 'snowy':
        this.weatherIcon = 'bi-snow';
        this.weatherIconColor = 'text-light';
        this.weatherStyle = 'background-snowy';
        break;
      default:
        this.weatherIcon = 'bi-question-circle';
        this.weatherIconColor = 'text-warning';
        this.weatherStyle = 'background-sunny';
        break;
    }
  }
}
