import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatePokemonComponent } from './pages/create-pokemon/create-pokemon.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: "", component: AppComponent},
    {path: "create", component: CreatePokemonComponent}
];