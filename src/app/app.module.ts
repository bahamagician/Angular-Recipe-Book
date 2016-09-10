import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component';
import {RecipeListComponent} from "./recipes/recipe-list";
import {RecipeItemComponent} from "./recipes/recipe-list";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})

export class AppModule {}
