import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PokeResponse } from './interfaces/pokeResponse';
import { Observable } from 'rxjs';
import { PokeResult } from './interfaces/pokeResult';


@Injectable({
  providedIn: 'root'
})
export class PokeService {

  urlApi:string=`https://pokeapi.co/api/v2/pokemon`;
  urlPokemon:any[]=[];

  
  constructor(private _http:HttpClient) { }
  
  getParams(num:number){
   return new HttpParams()
   .set('limit',num)
   .set('offset','')
 }
  getData(num:number):void{
  const data=`${this.urlApi}`
   this._http.get<PokeResponse>(data,{params:this.getParams(num)})
   .subscribe((resp)=> resp.results.map((e)=> this.urlPokemon.push(e.url)))
   console.log(this.urlPokemon);
  }
}
