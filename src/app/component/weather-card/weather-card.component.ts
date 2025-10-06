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
  }

  ngOnChanges(): void {
    if (this.city) {
      this.setWeatherStyle(this.city.weather);
    }
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

  setWeatherStyle(weather: string) {
    const condition = weather.toLowerCase();

    if (condition.includes('clear')) {
      this.weatherStyle = 'background-clear';
      this.weatherIcon = 'bi-sun-fill';
      this.weatherIconColor = 'text-clear';
    } else if (condition.includes('cloud')) {
      this.weatherStyle = 'background-clouds';
      this.weatherIcon = 'bi-cloud-fill';
      this.weatherIconColor = 'text-clouds';
    } else if (condition.includes('rain')) {
      this.weatherStyle = 'background-rain';
      this.weatherIcon = 'bi-cloud-rain-fill';
      this.weatherIconColor = 'text-rain';
    } else if (condition.includes('drizzle')) {
      this.weatherStyle = 'background-drizzle';
      this.weatherIcon = 'bi-cloud-drizzle-fill';
      this.weatherIconColor = 'text-drizzle';
    } else if (condition.includes('thunderstorm')) {
      this.weatherStyle = 'background-thunderstorm';
      this.weatherIcon = 'bi-cloud-lightning-fill';
      this.weatherIconColor = 'text-thunderstorm';
    } else if (condition.includes('snow')) {
      this.weatherStyle = 'background-snow';
      this.weatherIcon = 'bi-snow-fill';
      this.weatherIconColor = 'text-snow';
    } else if (condition.includes('mist') || condition.includes('fog') || condition.includes('haze')) {
      this.weatherStyle = 'background-mist';
      this.weatherIcon = 'bi-cloud-fog-fill';
      this.weatherIconColor = 'text-mist';
    } else if (
      condition.includes('smoke') ||
      condition.includes('dust') ||
      condition.includes('sand') ||
      condition.includes('ash')
    ) {
      this.weatherStyle = 'background-smoke';
      this.weatherIcon = 'bi-cloud-smoke-fill';
      this.weatherIconColor = 'text-smoke';
    } else if (condition.includes('squall')) {
      this.weatherStyle = 'background-squall';
      this.weatherIcon = 'bi-cloud-squall-fill';
      this.weatherIconColor = 'text-squall';
    } else if (condition.includes('tornado')) {
      this.weatherStyle = 'background-tornado';
      this.weatherIcon = 'bi-tornado';
      this.weatherIconColor = 'text-tornado';
    } else {
      // por defecto
      this.weatherStyle = 'background-clear';
      this.weatherIcon = 'bi-sun-fill';
      this.weatherIconColor = 'text-clear';
    }
  }

}
