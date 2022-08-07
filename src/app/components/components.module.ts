import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from '../prime-ng.module';


import { PokeInputComponent } from './poke-input/poke-input.component';
import { PokeCardComponent } from './poke-card/poke-card.component';
import { PokeContentComponent } from './poke-content/poke-content.component';
import { appRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    PokeInputComponent,
    PokeCardComponent,
    PokeContentComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    appRoutingModule
  ],
  exports:[
    PokeInputComponent,
    PokeCardComponent,
    PokeContentComponent
  ]
})
export class ComponentsModule { }
