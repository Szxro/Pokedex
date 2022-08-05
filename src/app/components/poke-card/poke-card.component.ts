import { Component, Input, OnInit } from '@angular/core';
import { PokeResult } from '../../interfaces/pokeResult';
import { PokeService } from '../../poke.service';



@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit {

  constructor(private _poke:PokeService) { }

  ngOnInit(): void {
  }

  get getPokemon(){
    return this._poke.setPokemon.sort((a,b)=> a.id - b.id);
  }
}

