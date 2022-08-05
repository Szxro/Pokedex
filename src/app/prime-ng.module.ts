import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  exports:[
    InputTextModule,
    CardModule,
    ButtonModule,
    ProgressSpinnerModule
  ]
})
export class PrimeNGModule { }
