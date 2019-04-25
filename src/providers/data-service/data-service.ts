import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class DataServiceProvider {

  constructor(public http: HttpClient,) {
    console.log('Hello DataServiceProvider Provider');
  }
  
  GetWeatherData():Observable<any>
{
  return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=17483171df536b13647eec5650e17bd7');
}
}

