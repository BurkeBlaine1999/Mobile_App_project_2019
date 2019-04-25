import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {IonicStorageModule} from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

//Pages +=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ResultsPage} from '../pages/results/results';
import {TabsPage} from '../pages/tabs/tabs';
import {CalibratePage} from '../pages/calibrate/calibrate';
import {AppInfoPage} from '../pages/app-info/app-info';

//+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ResultsPage,
    TabsPage,
    CalibratePage,
    AppInfoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ResultsPage,
    TabsPage,
    CalibratePage,
    AppInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
