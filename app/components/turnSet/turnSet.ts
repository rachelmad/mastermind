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
  
  private hints: Array<number> = []; 
  private checked: Array<boolean>;
  private hasHints: boolean = false;

  checkPattern(pattern: Array<string>): void {
    let position = 0;
    this.checked = [false, false, false, false];
    pattern.forEach((peg: string) => {
      this.checkPeg(peg, position);
      position++;
    })
    this.hasHints = true;
  }

  checkPeg(color: string, position: number): void {
    let currentPosition = 0;
    this.code.forEach((peg: string) => {
      if (color === peg && this.checked[currentPosition] === false) {
        if (position === currentPosition) {
          this.hints.push(POSITION_MATCH);
        }
        else {
          this.hints.push(COLOR_MATCH);
        }
        this.checked[currentPosition] = true;
      }
      currentPosition++;
    })
  }
}
