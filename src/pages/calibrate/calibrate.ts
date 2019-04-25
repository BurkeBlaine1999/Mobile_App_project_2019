import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {ResultsPage} from '../results/results';
import {Storage} from '@ionic/storage';
import { Time } from '@angular/common';

@IonicPage()
@Component({
  selector: 'page-calibrate',
  templateUrl: 'calibrate.html',
})

export class CalibratePage {
  buttonDisabled: boolean;

  date:Date;
  key:string='date';

  time:number;
  key2:string='timeKey';
 
  Cl:number;
  key3:string='ClKey';

  Ph:number; 
  key4:string='PhKey';

  dateArray:Array<Date>;
  timeArray:Array<number>;
  ClArray:Array<number>;
  PhArray:Array<number>;
 

  



  constructor
  (
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private storage:Storage
    
  ){

  }

  SaveData()
  {

    this.storage.set(this.key,this.date);
    this.storage.set(this.key2,this.time);
    this.storage.set(this.key3,this.Cl);
    this.storage.set(this.key4,this.Ph);

    console.log(this.date);
    console.log(this.time);
    console.log(this.Cl);
    console.log(this.Ph);

  }

 

}
