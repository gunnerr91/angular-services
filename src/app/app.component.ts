import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages = [];
  constructor(private wikipediaService: WikipediaService) {}

  onTermChanged(term: string) {
    this.wikipediaService.search(term).subscribe((response) => {
      console.log(response);
      this.pages = response;
    });
  }
}
