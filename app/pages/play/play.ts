import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PegSetComponent } from '../../components/pegSet/pegSet';

@Component({
  templateUrl: 'build/pages/play/play.html',
    directives: [
  	PegSetComponent
  ]
})
export class PlayPage {
  constructor(public navCtrl: NavController) {

  }

  gotoHome() {
  	this.navCtrl.pop();
  }
}
