import { Component, EventEmitter, Output } from '@angular/core';
import { PegComponent } from '../peg/peg';
import { COLOR1, 
         COLOR2,
         COLOR3,
         COLOR4,
         COLOR5,
         COLOR6 } from '../../shared/constants';

@Component({
  selector: 'pegColorOptions',
  templateUrl: 'build/components/pegColorOptions/pegColorOptions.html',
  directives: [
    PegComponent
  ]
})
export class PegColorOptionsComponent {
  @Output() colorEmit = new EventEmitter();

  private color1: string = COLOR1;
  private color2: string = COLOR2;
  private color3: string = COLOR3;
  private color4: string = COLOR4;
  private color5: string = COLOR5;
  private color6: string = COLOR6;
  
  selectedColor(color: string) {
    this.colorEmit.emit({
      value: color
    });
  }
}

