import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokeResult } from '../../interfaces/pokeResult';



@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit {

  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
  }
}

