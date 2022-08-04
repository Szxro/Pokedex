import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokeService } from '../../poke.service';
import { PokeResponse, Result } from '../../interfaces/pokeResponse';

@Component({
  selector: 'app-poke-input',
  templateUrl: './poke-input.component.html',
  styleUrls: ['./poke-input.component.scss']
})
export class PokeInputComponent implements OnInit {

  constructor(private _poke:PokeService) { }

  ngOnInit(): void {
  }

  getValue(num:number){
     this._poke.getData(20);
  }
}
