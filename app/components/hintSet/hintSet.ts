import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PegComponent } from '../peg/peg';
import { POSITION_HINT, 
         COLOR_HINT } from '../../shared/constants';

@Component({
  selector: 'hintSet',
  templateUrl: 'build/components/hintSet/hintSet.html',
  directives: [
    PegComponent
  ]
})
export class HintSetComponent implements OnChanges {
  @Input() hints: Array<number>;
  private hint1Color: string = null;
  private hint2Color: string = null;
  private hint3Color: string = null;
  private hint4Color: string = null;

  ngOnChanges(changes: SimpleChanges) {
    let hintArray = changes['hints'].currentValue;
    this.hint1Color = this.getColor(hintArray[0]);
    this.hint2Color = this.getColor(hintArray[1]);
    this.hint3Color = this.getColor(hintArray[2]);
    this.hint4Color = this.getColor(hintArray[3]);
  }

  getColor(colorEnum: number): string {
    switch (colorEnum) {
      case 1:
        return COLOR_HINT;
      case 2: 
        return POSITION_HINT;
      default:
        return null;
    }
  }
}
