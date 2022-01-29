import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Typing Challenge';
  successMsg = '';
  randomText = faker.lorem.sentences(3);
  enteredText = '';
  onInput(value: string) {
    this.enteredText = value;
    if (value === this.randomText) this.successMsg = 'Success!';
    else this.successMsg = '';
  }
  compare(letter: string, enteredLetter: string) {
    if (!enteredLetter) return '';
    return letter === enteredLetter ? 'correct' : 'wrong';
  }
}
