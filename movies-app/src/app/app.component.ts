import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './components/test/test.component';

import { DetailsComponent } from './components/test/details/details.component';
import { CommonModule } from '@angular/common';
import { ProfitPipe } from './pipes/profit.pipes';
import { FormsModule } from '@angular/forms';
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
    CommonModule,
    ProfitPipe,
    FormsModule,
    //DetailsMoviesComponent,
    //DetailsReviewsComponent,
  ],
})
export class AppComponent {
  title = 'The title of App Component';

  today = new Date();
  // price = 10;

  // sellingPrice = 15.5;

  // attributeValue = 'movies-app-test-value';

  // multipleClasses = 'sample-bg-color sample-color';
  // timeNow = new Date();
  // setTimeToNow() {
  //   //console.log(new Date());
  //   //this.today = new Date();
  //   this.timeNow = new Date();
  // }
  // bgColor = '';
  // setTextColor(colorInput: string) {
  //   console.log(colorInput);
  //   this.bgColor = colorInput;
  // }

  fullName = 'Bhushan Vilas Marathe';
}
