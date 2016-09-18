import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: "peg",
  templateUrl: 'build/components/peg/peg.html'
})
export class PegComponent implements OnInit {
  @Input() firstColor: string;

  private pegColor;

  ngOnInit() {
    this.pegColor = this.firstColor;
  }
}
