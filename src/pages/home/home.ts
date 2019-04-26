import { Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import {DataServiceProvider} from '../../providers/data-service/data-service';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public weather :any=[];
  public result:any = [];

  constructor(
    public navCtrl: NavController ,
    public alertCtrl: AlertController,
    private DataService:DataServiceProvider ,
    public http: HttpClient) {
      this.loadData();
    }

    //gets information from weather API
    loadData()
    {
      let data:Observable<any>;
      data = this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=17483171df536b13647eec5650e17bd7');
      data.subscribe(result => 
        {
          this.weather = result.weather;
        })
    }
    //==================================

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
