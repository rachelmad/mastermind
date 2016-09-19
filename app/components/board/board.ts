import { Component } from '@angular/core';
import { TurnSetComponent } from '../turnSet/turnSet';
import { COLOR1, 
         COLOR2,
         COLOR3,
         COLOR4,
         COLOR5,
         COLOR6 } from '../../shared/constants';

@Component({
  selector: 'board',
  templateUrl: 'build/components/board/board.html',
  directives: [
    TurnSetComponent
  ]
})
export class BoardComponent {
  private code: Array<string> = [];

  constructor() {
    for (var i = 0; i < 4; i++) {
      this.code.push(this.convertNumberToColor(Math.floor(Math.random() * 6) + 1));
    };
    console.log(this.code);
  }

  convertNumberToColor(num: number) {
    switch (num) {
      case 1:
        return COLOR1;
      case 2:
        return COLOR2;
      case 3:
        return COLOR3;
      case 4:
        return COLOR4;
      case 5:
        return COLOR5;
      case 6:
        return COLOR6;
    }
  }
}