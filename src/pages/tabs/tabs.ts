import { Component } from '@angular/core';
import {HomePage} from '../home/home';
import {ResultsPage} from '../results/results';
import {CalibratePage} from '../calibrate/calibrate';
import { AppInfoPage } from '../app-info/app-info';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  resultsPage = ResultsPage;
  calibratePage = CalibratePage;
  appInfoPage = AppInfoPage;

}
