import { Component, Output, EventEmitter, Input, SimpleChange } from '@angular/core';
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
  @Input() isActiveInput: boolean;
  @Output() patternEmit = new EventEmitter();

  private peg1: string = null;
  private peg2: string = null;
  private peg3: string = null;
  private peg4: string = null;

  private isActive: boolean;
  private isClickable: boolean = true;
  private colorOptionsIsVisible: boolean = false;
  private lastSelected: number;
  private arrowIsVisible: boolean = false;

  constructor() {
    this.isActive = this.isActiveInput;
  }

  setActive(activeBoolean: boolean) {
    this.isActive = activeBoolean;
  }

  toggleColorOptions(): void {
    this.colorOptionsIsVisible = !this.colorOptionsIsVisible;
  }

  showColorOptions(position: number): void {
    if (this.isClickable && this.isActive) {
      this.lastSelected = position;
      this.toggleColorOptions();
    }
  }

  changePegColor(color: string): void {
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
    this.colorOptionsIsVisible = false;

    this.arrowIsVisible = this.isComplete();
  }

  isComplete(): boolean {
    return (this.peg1 !== null && this.peg2 !== null && this.peg3 !== null && this.peg4 !== null);
  }

  submitPattern(): void {
    this.isClickable = false;
    this.patternEmit.emit({
      value: [this.peg1, this.peg2, this.peg3, this.peg4]
    });
  }
}
