import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';

@NgModule({
  exports:[
    InputTextModule,
    CardModule
  ]
})
export class PrimeNGModule { }
