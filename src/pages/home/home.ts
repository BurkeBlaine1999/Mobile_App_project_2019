import { Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

@ViewChild('username') uname;
@ViewChild('password') pword;

  constructor(
    public navCtrl: NavController ,
    public alertCtrl: AlertController) {}

  SignIn()
  {
    let alert = this.alertCtrl.create({
      title: 'Welcome',
      subTitle: 'Click Ok to proceed',
      buttons: ['Ok']
    });
    alert.present();

  this.navCtrl.push(TabsPage);

  }

}
