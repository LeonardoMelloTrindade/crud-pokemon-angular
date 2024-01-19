import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardPokemonComponent } from '../card-pokemon/card-pokemon.component';


@Component({
  selector: 'app-view-pokemon',
  standalone: true,
  imports: [CommonModule, CardPokemonComponent],
  templateUrl: './view-pokemon.component.html',
  styleUrl: './view-pokemon.component.css'
})
export class ViewPokemonComponent {

  pokemon = [1];

}
