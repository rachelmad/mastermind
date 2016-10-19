import { Component } from '@angular/core';
import { PegComponent } from '../peg/peg';
import { NO_HINT,
         POSITION_HINT, 
         COLOR_HINT } from '../../shared/constants';

@Component({
  selector: 'hintSet',
  templateUrl: 'build/components/hintSet/hintSet.html',
  directives: [
    PegComponent
  ]
})
export class HintSetComponent {
  private hint1Color: string = null;
  private hint2Color: string = null;
  private hint3Color: string = null;
  private hint4Color: string = null;

  setHints(hints: Array<number>) {
    this.hint1Color = this.getColor(hints[0]);
    this.hint2Color = this.getColor(hints[1]);
    this.hint3Color = this.getColor(hints[2]);
    this.hint4Color = this.getColor(hints[3]);
  }

  getColor(colorEnum: number): string {
    switch (colorEnum) {
      case 0:
        return NO_HINT;
      case 1:
        return COLOR_HINT;
      case 2: 
        return POSITION_HINT;
      default:
        return null;
    }
  }
}
