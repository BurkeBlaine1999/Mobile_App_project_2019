import { Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import {DataServiceProvider} from '../../providers/data-service/data-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit{

  constructor(
    public navCtrl: NavController ,
    public alertCtrl: AlertController,
    private DataService:DataServiceProvider ) {}

  weather :any=[];

    ngOnInit(){
      this.DataService.GetWeatherData().subscribe((data)=>{
          this.weather=data.weather;             //get the JSON data
      });
    }

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
