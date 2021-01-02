import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FoodModule } from '../shared/food/food.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    CartComponent,
    CategoriesComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,

    FormsModule,
    FoodModule,
    FontAwesomeModule,
    AppRoutingModule
  ]
})
export class HomeModule { }