import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPokemonComponent } from './select-pokemon.component';

describe('SelectPokemonComponent', () => {
  let component: SelectPokemonComponent;
  let fixture: ComponentFixture<SelectPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectPokemonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
