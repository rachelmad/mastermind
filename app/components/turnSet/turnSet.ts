import { Component, Input } from '@angular/core';
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
  
  private codeCopy: Array<string>;
  private hints: Array<number> = []; 
  private checked: Array<boolean>;
  private hasHints: boolean = false;

  checkPattern(pattern: Array<string>): void {
    let position = 0;
    this.checked = [false, false, false, false];
    this.codeCopy = this.code.slice();

    this.getPositionMatches(pattern);
    let newPattern = this.removeMatchedPegs(pattern);
    let newCode = this.removeMatchedPegs(this.codeCopy);
    this.getColorMatches(newPattern, newCode);

    this.hasHints = true;
  }

  getPositionMatches(pattern: Array<string>): void {
    if (this.code[0] === pattern[0]) {
      this.hints.push(POSITION_MATCH);
      this.checked[0] = true;
    }
    if (this.code[1] === pattern[1]) {
      this.hints.push(POSITION_MATCH);
      this.checked[1] = true;
    }
    if (this.code[2] === pattern[2]) {
      this.hints.push(POSITION_MATCH);
      this.checked[2] = true;
    }
    if (this.code[3] === pattern[3]) {
      this.hints.push(POSITION_MATCH);
      this.checked[3] = true;
    }
  }

  removeMatchedPegs(pattern: Array<string>): Array<string> {
    let index = 0;
    let newPattern: Array<string> = pattern;
    this.checked.forEach((check: boolean) => {
      if (check) {
        newPattern = pattern.splice(index, 1);
      };
      index++;
    })
    return newPattern;
  }

  getColorMatches(pattern: Array<string>, code: Array<string>) {
    let matched: Array<boolean> = [];
    pattern.forEach(() => {
      matched.push(false);
    })

    let index = 0;
    pattern.forEach((patternPeg: string) => {
      code.forEach((codePeg: string) => {
        if (codePeg === patternPeg && matched[index] === false) {
          this.hints.push(COLOR_MATCH);
          matched[index] = true;
        };
        index++;
      });
    });
  }
}
