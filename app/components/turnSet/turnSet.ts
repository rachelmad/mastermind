import { Component, Input, ViewChild } from '@angular/core';
import { PegSetComponent } from '../pegSet/pegSet';
import { COLOR1, 
         COLOR2,
         COLOR3,
         COLOR4,
         COLOR5,
         COLOR6 } from '../../shared/constants';
import { HintSetComponent } from '../hintSet/hintSet';

const POSITION_MATCH = 2;
const COLOR_MATCH = 1;
const NO_MATCH = 0;

@Component({
  selector: 'turnSet',
  templateUrl: 'build/components/turnSet/turnSet.html',
  directives: [
    PegSetComponent,
    HintSetComponent
  ]
})
export class TurnSetComponent {
  @Input() code: Array<string>;
  @ViewChild('hintSet') hintSet: HintSetComponent;
  
  private guess: Array<string>;
  private codeCopy: Array<string> = null;
  private hints: Array<number> = []; 
  private hasHints: boolean = false;

  checkPattern(guess: Array<string>): void {
    let position = 0;
    this.guess = guess;
    this.codeCopy = this.code.slice();

    this.getPositionMatches(guess);
    this.getColorMatches(guess, this.codeCopy);

    this.hasHints = true;
    this.hintSet.setHints(this.hints);
  }

  getPositionMatches(guess: Array<string>): void {
    let originalLength = this.codeCopy.length;
    for(let i = 0; i < originalLength; i++) {
      let index = originalLength - i - 1;
      if (this.code[index] === guess[index]) {
        this.hints.push(POSITION_MATCH);
        this.guess.splice(index, 1);
        this.codeCopy.splice(index, 1);
      }
    }
  }

  getColorMatches(guess: Array<string>, code: Array<string>) {
    guess.forEach((guessPeg: string) => {
      let index = code.indexOf(guessPeg);
      if (index > -1) {
        this.hints.push(COLOR_MATCH);
        code.splice(index, 1);
      };
    });
  }
}
