import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeDetailsComponent} from "./recipe-details/recipe-details.component";
import {RecipeCardsComponent} from "./recipe-cards/recipe-cards.component";

const routes: Routes = [
  { path: 'recipes', component: RecipeListComponent },
  { path: 'recipes/tile-view', component: RecipeCardsComponent },
  { path: 'recipes/:recipeId', component: RecipeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
