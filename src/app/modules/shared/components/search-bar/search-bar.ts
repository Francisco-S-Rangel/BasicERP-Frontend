import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  searchValue: string = "";

  @Output() searchEvent = new EventEmitter<string>();

  search(): void {
    console.log(this.searchValue);
    this.searchEvent.emit(this.searchValue);
  }

  searchBackEnd(): void {

  }

  searchLocalStorage(): void {

  }
}
