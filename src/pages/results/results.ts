import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {CalibratePage} from '../calibrate/calibrate';
import { Time } from '@angular/common';
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})


export class ResultsPage {

  @ViewChild('row1date') r1D;

  date:Date;
  time:any;
  Chlorine:any;
  Phenol:any;
  
 count:number=0;

 va1:Date;
 va2:any;
 va3:any;
 va4:any;

 message:String;
 Phmessage:String;
 



  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public storage: Storage,
     public alertCtrl: AlertController
) {

}

  refresh()
  {

    //Gets values from Calibrate Page
      this.storage.get("date").then((val) => {
       // this.va1 = this.date;
        this.date = val;
        console.log(val);
      });

      //Gets values from Calibrate Page
      this.storage.get("timeKey").then((va2) => {
      //  this.va2 = this.time;
        this.time = va2;
        console.log(va2);
      });

      //Gets values from Calibrate Page
      this.storage.get("ClKey").then((va3) => {
      //  this.va3 = this.Chlorine;
        this.Chlorine = va3;
        console.log( va3);
      });

      //Gets values from Calibrate Page
      this.storage.get("PhKey").then((va4) => {
      //  this.va4 = this.Phenol;
        this.Phenol = va4;
        console.log(va4);
      });

      //Message--------

      if(this.Chlorine > 1 && this.Chlorine < 1.51)
      {
          this.message="Chlorine Levels are Stable!";
          
      }

      else if(this.Chlorine > 1.5 && this.Chlorine < 2)
      {
          this.message="Chlorine Levels are high! Calibrate immediatly";
      }

      else if(this.Chlorine > 2)
      {
          this.message="Chlorine Levels are Dangerously high! Calibrate immediatly";
      }

      else if(this.Chlorine < 1 && this.Chlorine > 0.5)
      {
          this.message="Chlorine Levels are low Calibrate immediatly!";

      }

      else if(this.Chlorine < 1 && this.Chlorine > 0.5)
      {
          this.message="Chlorine levels are extremely low! Turn off calibrator and hand feed!";
          
          
      }

 /////////////////////////
 
 if(this.Phenol > 7.2 && this.Phenol < 7.8)
 {
     this.Phmessage="Ph Levels are Stable!";
 }

 else if(this.Phenol > 7.8 && this.Phenol < 8.2)
 {
     this.Phmessage="Ph Levels are high! Calibrate immediatly";
 }

 else if(this.Phenol > 8.2)
 {
     this.Phmessage="Ph Levels are Dangerously high! Add an acid or sodium bisulphate";
    
 }

 else if(this.Phenol < 7.2 && this.Phenol > 6.9)
 {
     this.Phmessage="Ph Levels are low Calibrate immediatly!";
 }

 else if(this.Phenol < 6.9)
 {
     this.Phmessage="Ph levels are extremely low! Add a scoop of Baking Soda! ";
     
 }

 console.log(this.message);
 console.log(this.Phmessage);
    
  }

}


