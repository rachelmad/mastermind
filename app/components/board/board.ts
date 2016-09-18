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
  private code: Array<string> = [COLOR1, COLOR2, COLOR3, COLOR4];
}