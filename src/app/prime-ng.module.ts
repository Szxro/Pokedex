import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

@NgModule({
  exports:[
    InputTextModule,
    CardModule,
    ButtonModule
  ]
})
export class PrimeNGModule { }
