import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://c1.staticflickr.com/1/108/275776506_ecfd29e6cf_b.jpg'),
    new Recipe('A test recipe 2', 'This is simply a test 2', 'https://c1.staticflickr.com/1/108/275776506_ecfd29e6cf_b.jpg'),
    new Recipe('A test recipe 3', 'This is simply a test 3', 'https://c1.staticflickr.com/1/108/275776506_ecfd29e6cf_b.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
