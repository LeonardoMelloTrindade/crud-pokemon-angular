import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class PokeApiService {

  API = "https://pokeapi.co/api/v2/";

  constructor() { }


}
