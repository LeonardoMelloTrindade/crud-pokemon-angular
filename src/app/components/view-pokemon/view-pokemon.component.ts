import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardPokemonComponent } from '../card-pokemon/card-pokemon.component';
import { PokeApiService } from '../../services/poke-api.service';

@Component({
  selector: 'app-view-pokemon',
  standalone: true,
  imports: [CommonModule, CardPokemonComponent],
  templateUrl: './view-pokemon.component.html',
  styleUrl: './view-pokemon.component.css',
})
export class ViewPokemonComponent {
  pokemon = [];
  @Input() dataPokemon: any = '';

  constructor(public pokeApi: PokeApiService) {}

  getPokemon(pokemon: string): void {
    this.pokeApi.getPokemon('pikachu').subscribe((data) => {
      console.log(data);
      this.dataPokemon = data;
    });
  }
}
