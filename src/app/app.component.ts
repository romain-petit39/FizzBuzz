import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'FizzBuzz';
  fizzBuzzResponses: String[] = [];

  ngOnInit(): void {
    for (let i = 1; i <= 100; i++ ) {
      this.fizzBuzzResponses.push(this.fizzBuzz(i));
    }
    
  }

  fizzBuzz(number: number) {
    if (number % 5 === 0 && number % 3 === 0) {
      return 'FizzBuzz';
    } else if (number % 3 === 0) {
      return 'Fizz';
    } else if (number % 5 === 0) {
      return 'Buzz';
    } else {
      return number.toString();
    }
  }
}
