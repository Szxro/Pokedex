import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  exports:[
    ButtonModule,
    ProgressSpinnerModule
  ]
})
export class PrimeNGModule { }
