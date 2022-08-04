import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from '../prime-ng.module';


import { PokeInputComponent } from './poke-input/poke-input.component';
import { PokeCardComponent } from './poke-card/poke-card.component';



@NgModule({
  declarations: [
    PokeInputComponent,
    PokeCardComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule
  ],
  exports:[
    PokeInputComponent,
    PokeCardComponent
  ]
})
export class ComponentsModule { }
