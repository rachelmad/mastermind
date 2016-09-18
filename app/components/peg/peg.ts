import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: "peg",
  templateUrl: 'build/components/peg/peg.html'
})
export class PegComponent implements OnInit {
  @Input() firstColor: string;

  private pegColor: string;
  private coloredPeg: boolean;

  ngOnInit() {
    if (this.firstColor === null) {
      this.coloredPeg = false;
      this.pegColor = "black";
    }
    else {
      this.coloredPeg = true;
      this.pegColor = this.firstColor;
    }
  }
}
