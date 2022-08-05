import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PokeResponse } from './interfaces/pokeResponse';
import { PokeResult } from './interfaces/pokeResult';


@Injectable({
  providedIn: 'root'
})
export class PokeService {

  urlApi:string=`https://pokeapi.co/api/v2/pokemon`;
  pokemon:any[]=[];
  params:HttpParams= new HttpParams()
  .set('limit',20)
  .set('offset','');

  
  constructor(private _http:HttpClient) { }

  get setPokemon(){
    return this.pokemon;
  }

  getData():void{
    this._http.get<PokeResponse>(`${this.urlApi}`,{params:this.params})
    .subscribe(resp => this.getPokemon(resp));
  }

  getPokemon(arg:PokeResponse):void{
    arg.results.forEach((e)=> {
      this._http.get<PokeResult>(e.url)
      .subscribe(resp => this.pokemon.push(
        {
          id:resp.id,
          name:resp.name,
          image:resp.sprites.other?.dream_world.front_default,
          type:resp.types.map((e)=>e.type.name)
        }))
      })
  }
  
}
