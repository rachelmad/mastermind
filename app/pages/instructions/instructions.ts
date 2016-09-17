import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/instructions/instructions.html'
})
export class InstructionsPage {
  constructor(public navCtrl: NavController) {

  }

  gotoHome() {
  	this.navCtrl.pop();
  }
}
