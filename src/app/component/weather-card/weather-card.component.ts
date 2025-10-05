import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css'
})
export class WeatherCardComponent {
  @Input() city: string = '';
  fechaActual: string = '';

  constructor() { }

  ngOnInit(): void {
    this.obtenerFechaActual();
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
}
