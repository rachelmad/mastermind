import { Component, Input, ViewChild, Output, EventEmitter, SimpleChange } from '@angular/core';
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
  @Input() isActiveInput: boolean;
  @Input() isLastTurn: boolean;
  @Output() endTurn: EventEmitter<any> = new EventEmitter();
  @Output() winEmit: EventEmitter<any> = new EventEmitter();
  @ViewChild('hintSet') hintSet: HintSetComponent;
  
  private guess: Array<string>;
  private codeCopy: Array<string> = null;
  private hints: Array<number> = []; 
  private hasHints: boolean = false;
  private isActive: boolean;

  constructor() {
    this.isActive = this.isActiveInput;
  }

  ngOnChanges(changes: { [isActiveInput: string]: SimpleChange }) {
    this.isActive = this.isActiveInput;     
  }

  checkPattern(guess: Array<string>): void {
    let position = 0;
    this.guess = guess;
    this.codeCopy = this.code.slice();

    this.getPositionMatches(guess);
    this.getColorMatches(guess, this.codeCopy);
    this.fillHints();

    this.hasHints = true;
    this.hintSet.setHints(this.hints);
    this.endTurn.emit({
      value: true
    });
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

  fillHints(): void {
    let noHints: number = 4 - this.hints.length;
    for (var i = 0; i < noHints; i++) {
      this.hints.push(NO_MATCH);
    };
  }

  emitWin(result: boolean): void {
    if (result) {
      this.winEmit.emit({
        value: true
      });
    }
    else if (this.isLastTurn && !result) {
      this.winEmit.emit({
        value: false
      });
    }
  }
}
