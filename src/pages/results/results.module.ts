import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultsPage } from './results';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
 
@NgModule({
  declarations: [
    ResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(ResultsPage),
    NgxDatatableModule
  ],
})
export class ResultsPageModule {}
