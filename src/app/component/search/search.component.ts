import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  cityInput: string = '';
  @Output() citySearch = new EventEmitter<string>();

  searchCity() {
    this.citySearch.emit(this.cityInput);
  }
}
