import { Component } from '@angular/core';
import { PegComponent } from '../peg/peg';
import { PegColorOptionsComponent } from '../pegColorOptions/pegColorOptions';

@Component({
  selector: 'pegSet',
  templateUrl: 'build/components/pegSet/pegSet.html',
  directives: [
    PegComponent,
    PegColorOptionsComponent
  ]
})
export class PegSetComponent {
  private peg1: string = null;
  private peg2: string = null;
  private peg3: string = null;
  private peg4: string = null;

  private colorOptionsIsVisible: boolean = false;
  private lastSelected: number;

  showColorOptions(position: number) {
    this.lastSelected = position;
    this.colorOptionsIsVisible = true;
  }

  changePegColor(color: string) {
    switch (this.lastSelected) {
      case 1:
        this.peg1 = color;
        break;
      case 2:
        this.peg2 = color;
        break;
      case 3:
        this.peg3 = color;
        break;
      case 4:
        this.peg4 = color;
        break;
    }
  }
}
