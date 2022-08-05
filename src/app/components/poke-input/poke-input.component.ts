import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../poke.service';

@Component({
  selector: 'app-poke-input',
  templateUrl: './poke-input.component.html',
  styleUrls: ['./poke-input.component.scss']
})
export class PokeInputComponent {

  constructor(private _poke:PokeService) { }
  
  nextPokemon():void{
    this._poke.putPokemon(+20);
  }

  previousPokemon():void{
    this._poke.putPokemon(-20);
  }
}
