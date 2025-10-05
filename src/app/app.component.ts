import { Component } from '@angular/core';
import { SearchComponent } from './component/search/search.component';
import { WeatherCardComponent } from "./component/weather-card/weather-card.component";
import { City } from './models/city.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchComponent, WeatherCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tiempo-app';
  selectedCity: City | null = null;

  onCitySelected(city: City) {
    this.selectedCity = city;
  }
}
