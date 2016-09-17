import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/play/play.html'
})
export class PlayPage {
  constructor(public navCtrl: NavController) {

  }

  gotoHome() {
  	this.navCtrl.pop();
  }
}
