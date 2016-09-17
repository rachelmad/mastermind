import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InstructionsPage } from '../instructions/instructions';
import { PlayPage } from '../play/play';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

  gotoPlay() {
  	this.navCtrl.push(PlayPage);
  }

  gotoInstructions() {
  	this.navCtrl.push(InstructionsPage);
  }
}
