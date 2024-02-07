import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { pokemons } from '../../data/pokemons';


@Component({
  selector: 'app-select-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-pokemon.component.html',
  styleUrl: './select-pokemon.component.css'
})
export class SelectPokemonComponent {

  dataPokemons = pokemons;

}
