import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeService } from '../../poke.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-poke-content',
  templateUrl: './poke-content.component.html',
  styleUrls: ['./poke-content.component.scss']
})
export class PokeContentComponent implements OnInit {
  pokemonName: any[] = [];
  error:boolean = false;

  constructor(
    private _activatedRoute:ActivatedRoute,
    private _poke:PokeService
    ) { }

  ngOnInit(): void {
    this.pokemonName=[];
    this._activatedRoute.params
    .pipe(
      switchMap(({name})=>this._poke.getByPokemonName(name)),
    ).subscribe(resp=>{
      this.pokemonName.push({
        name:resp.name,
        image:resp.sprites.other?.dream_world.front_default,
        health:resp.stats.map((e)=>e.base_stat).slice(0,2),
        abilities:resp.abilities.map((e)=>e.ability.name).slice(0,2),
        type:resp.types.map((e)=> e.type.name)
      })
    },(err)=> this.error=true)
  }

}
