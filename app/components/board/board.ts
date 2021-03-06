import { Component, OnInit } from '@angular/core';
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
export class BoardComponent implements OnInit {
  private code: Array<string> = [];
  private turnActive: Array<boolean> = [true, false, false, false, false, false];
  private isWinner: boolean = null;
  private trueHack: boolean = true;
  private falseHack: boolean = false;

  ngOnInit() {
    for (var i = 0; i < 4; i++) {
      this.code.push(this.convertNumberToColor(Math.floor(Math.random() * 6) + 1));
    };
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

  activateNextTurn(currentTurn: number) {
    this.turnActive[currentTurn] = false;
    this.turnActive[currentTurn + 1] = true;
  }

  win(result: boolean): void {
    this.isWinner = result;
  }
}