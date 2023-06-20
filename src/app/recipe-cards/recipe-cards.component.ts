import { Component } from '@angular/core';

import { recipes } from '../recipes';

@Component({
  selector: 'app-recipe-cards',
  templateUrl: './recipe-cards.component.html',
  styleUrls: ['./recipe-cards.component.css']
})
export class RecipeCardsComponent {
  recipes = [...recipes];

  share() {
    window.alert('The product has been shared!');
  }
}
