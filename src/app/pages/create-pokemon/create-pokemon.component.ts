import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-create-pokemon',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './create-pokemon.component.html',
  styleUrl: './create-pokemon.component.css'
})
export class CreatePokemonComponent {

}
