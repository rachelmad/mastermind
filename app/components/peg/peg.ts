import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: "peg",
  templateUrl: 'build/components/peg/peg.html'
})
export class PegComponent implements OnInit, OnChanges {
  @Input() pegColor: string;

  private coloredPeg: boolean;
  private pegColorDisplay: string;

  ngOnInit() {
    this.pegColorDisplay = this.pegColor;
    if (this.pegColor === null) {
      this.coloredPeg = false;
    }
    else {
      this.coloredPeg = true;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.pegColorDisplay = changes['pegColor'].currentValue;
    console.log(this.pegColorDisplay);
    this.coloredPeg = (this.pegColorDisplay !== null);
  }
}
