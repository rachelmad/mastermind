import { Component } from '@angular/core';
import { PegComponent } from '../peg/peg';

@Component({
  selector: 'pegSet',
  templateUrl: 'build/components/pegSet/pegSet.html',
  directives: [
    PegComponent
  ]
})
export class PegSetComponent {
  constructor() {

  }
}
