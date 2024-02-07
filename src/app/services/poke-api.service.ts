import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../model/pokemon.model';


@Injectable({
  providedIn: 'any'
})

export class PokeApiService {

  private apiUrl = "https://pokeapi.co/api/v2/pokemon/";

  constructor(public http: HttpClient) {}

  getPokemon(pokemon: string): Observable<Object> {
    const pokemonApi = this.http.get(`${this.apiUrl}${pokemon}`)
    return pokemonApi;
  }


}
