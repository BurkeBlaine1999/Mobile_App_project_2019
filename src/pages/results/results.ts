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

 va5:Date;
 va6:any;
 va7:any;
 va8:any;

 va9:Date;
 va10:any;
 va11:any;
 va12:any;

 va13:Date;
 va14:any;
 va15:any;
 va16:any;

 va17:Date;
 va18:any;
 va19:any;
 va20:any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public storage: Storage,
     public alertCtrl: AlertController
) {


}

  refresh()
  {
      this.count++;   

      if(this.count=1)
      {
        this.va5 = this.va1;
        this.va6 = this.va2;
        this.va7 = this.va3;
        this.va8 = this.va4;
      }
      
      if(this.count=2)
      {
        this.va5 = this.va1;
        this.va6 = this.va2;
        this.va7 = this.va3;
        this.va8 = this.va4;
      }
      
      if(this.count=3)
      {
        this.va9 = this.va1;
        this.va10 = this.va2;
        this.va11= this.va3;
        this.va12= this.va4;

        this.va5 = this.va1;
        this.va6 = this.va2;
        this.va7 = this.va3;
        this.va8 = this.va4;
      }

      if(this.count=4)
      {
        this.va13 = this.va9;
        this.va14 = this.va10;
        this.va15= this.va11;
        this.va16= this.va12;

        this.va9 = this.va1;
        this.va10 = this.va2;
        this.va11= this.va3;
        this.va12= this.va4;

        this.va5 = this.va1;
        this.va6 = this.va2;
        this.va7 = this.va3;
        this.va8 = this.va4;
      }
      if(this.count>=5)
      {
        this.va17= this.va13;
        this.va18 = this.va14;
        this.va19= this.va15;
        this.va20= this.va16;

        this.va13 = this.va9;
        this.va14 = this.va10;
        this.va15= this.va11;
        this.va16= this.va12;

        this.va9 = this.va1;
        this.va10 = this.va2;
        this.va11= this.va3;
        this.va12= this.va4;

        this.va5 = this.va1;
        this.va6 = this.va2;
        this.va7 = this.va3;
        this.va8 = this.va4;
      }

      this.storage.get("date").then((val) => {
        this.va1 = this.date;
        this.date = val;
        console.log(val);
      });
      this.storage.get("timeKey").then((va2) => {
        this.va2 = this.time;
        this.time = va2;
        console.log(va2);
      });
      this.storage.get("ClKey").then((va3) => {
        this.va3 = this.Chlorine;
        this.Chlorine = va3;
        console.log( va3);
      });
      this.storage.get("PhKey").then((va4) => {
        this.va4 = this.Phenol;
        this.Phenol = va4;
        console.log(va4);
      });
  
     
  }

}


