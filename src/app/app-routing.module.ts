import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeDetailsComponent} from "./recipe-details/recipe-details.component";

const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'recipes/:recipeId', component: RecipeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
