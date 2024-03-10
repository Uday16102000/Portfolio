import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ScrollDetail } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 })),
      ]),
    ]),
  ],

})
export class HomeComponent  implements OnInit {

  animationState = 'start';
  typingText = '';

  ngOnInit() {
    this.typeWords();
  }

  typeWords() {
    const words = ['Frontend', 'Backend', 'Full Stack Sofware Developer'];
    const delay = 100; // adjust delay between each letter typing

    let index = 0;
    let intervalId = setInterval(() => {
      this.typingText += words[0][index];
      index++;
      if (index === words[0].length) {
        clearInterval(intervalId);
        setTimeout(() => this.showNextWord(words), 1000); // delay before showing next word
      }
    }, delay);
  }

  showNextWord(words: string[]) {
    const delay = 100; // adjust delay between each letter typing

    let index = 0;
    let intervalId = setInterval(() => {
      if (index === words[1].length) {
        clearInterval(intervalId);
        setTimeout(() => this.showFinalWord(words), 1000); // delay before showing final word
      } else {
        this.typingText = words[1].substring(0, index + 1);
        index++;
      }
    }, delay);
  }

  showFinalWord(words: string[]) {
    const delay = 100; // adjust delay between each letter typing

    let index = 0;
    let intervalId = setInterval(() => {
      if (index === words[2].length) {
        clearInterval(intervalId);
        setTimeout(() => this.animationState = 'end', 1000); // delay before animation end
      } else {
        this.typingText = words[2].substring(0, index + 1);
        index++;
      }
    }, delay);
  }


}
