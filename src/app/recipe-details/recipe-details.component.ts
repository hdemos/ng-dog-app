import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Recipe, recipes} from '../recipes';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const recipeIdFromRoute = Number(routeParams.get('recipeId'));

    // Find the product that correspond with the id provided in route.
    this.recipe = recipes.find(recipe => recipe.id === recipeIdFromRoute);
  }
}
