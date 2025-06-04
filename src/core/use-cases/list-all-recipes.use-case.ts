import { Inject, Injectable } from '@nestjs/common';
import { Recipe } from '../entities/recipe.entity';
import {
  RECIPE_REPOSITORY,
  RecipeRepository,
} from '../repositories/recepe.repository';

@Injectable()
export class ListAllRecipesUseCase {
  constructor(
    @Inject(RECIPE_REPOSITORY)
    private readonly recipeRepository: RecipeRepository,
  ) {}

  async execute(): Promise<Recipe[]> {
    return this.recipeRepository.findAll();
  }
}
