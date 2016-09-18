import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BoardComponent } from '../../components/board/board';

@Component({
  templateUrl: 'build/pages/play/play.html',
  directives: [
  	BoardComponent
  ]
})
export class PlayPage {
  constructor(public navCtrl: NavController) {

  }

  gotoHome() {
  	this.navCtrl.pop();
  }
}
