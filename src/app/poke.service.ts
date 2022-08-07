import { Injectable, ɵɵsetComponentScope } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokeResponse } from './interfaces/pokeResponse';
import { PokeResult } from './interfaces/pokeResult';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  urlApi: string = `https://pokeapi.co/api/v2/pokemon`;
  previousApi: string = '';
  loading: boolean = false;
  pokemon: any[] = [];
  limit: number = 20;
  offset: number = 0;

  constructor(private _http: HttpClient) {}

  get setPokemon() {
    return this.pokemon;
  }

  getData(): void {
    this._http
      .get<PokeResponse>(
        `${this.urlApi}?limit=${this.limit}&offset=${this.offset}`
      )
      .subscribe((resp) => {
        this.getPokemon(resp);
      });
  }

  getPokemon(arg: PokeResponse): void {
    this.pokemon = [];
    arg.results.forEach((e) => {
      this._http.get<PokeResult>(e.url).subscribe((resp) => {
        this.pokemon.push({
          id: resp.id,
          name: resp.name,
          image: resp.sprites.other?.dream_world.front_default,
          type: resp.types.map((e) => e.type.name),
        });
        if (this.pokemon.length === 20) this.loading = false;
      });
    });
  }

  putPokemon(arg: number): void {
    this.offset += arg;
    if (this.offset < 0) this.offset = 0;
    this.pokemon = [];
    this._http
      .get<PokeResponse>(
        `${this.urlApi}?limit=${this.limit}&offset=${this.offset}`
      )
      .subscribe((resp) =>
        resp.results.forEach((e) => {
          this._http.get<PokeResult>(e.url).subscribe((resp) => {
            this.pokemon.push({
              id: resp.id,
              name: resp.name,
              image: resp.sprites.other?.dream_world.front_default,
              type: resp.types.map((e) => e.type.name),
            });
            if (this.pokemon.length === 20) this.loading = false;
          });
        })
      );
  }

  getByPokemonName(arg: string) {
    return  this._http.get<PokeResult>(`${this.urlApi}/${arg}`);
  }
}
