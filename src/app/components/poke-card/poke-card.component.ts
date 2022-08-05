import { Component } from '@angular/core';
import { PokeService } from '../../poke.service';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss'],
})
export class PokeCardComponent {
  loading!: boolean;

  constructor(private _poke: PokeService) {
    this.loading = this._poke.loading;
  }

  ngOnInit(): void {
    this._poke.getData();
  }

  get getPokemon() {
    return this._poke.setPokemon.sort((a, b) => a.id - b.id);
  }

  getValue(arg: any): void {
    this._poke.getByPokemonName(arg.name);
  }
}
