import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './components/test/test.component';

import { DetailsComponent } from './components/test/details/details.component';
//import { DetailsMoviesComponent } from './components/test/details-movies/details-movies.component';

//import { DetailsReviewsComponent } from './components/test/details-reviews/details-reviews.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    TestComponent,
    DetailsComponent,
    //DetailsMoviesComponent,
    //DetailsReviewsComponent,
  ],
})
export class AppComponent {
  title = 'movies-app';
}
