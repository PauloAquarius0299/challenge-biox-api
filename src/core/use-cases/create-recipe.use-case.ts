import { Inject } from '@nestjs/common';
import { Recipe } from '../entities/recipe.entity';
import {
  RECIPE_REPOSITORY,
  RecipeRepository,
} from '../repositories/recepe.repository';

export class CreateRecipeUseCase {
  constructor(
    @Inject(RECIPE_REPOSITORY) // Injete usando o token
    private readonly recipeRepository: RecipeRepository,
  ) {}

  async execute(
    title: string,
    description: string,
    ingredients: string[],
  ): Promise<Recipe> {
    const recipe = new Recipe(
      Math.random().toString(36).substring(2, 9),
      title,
      description,
      ingredients,
      new Date(),
      new Date(),
    );

    return this.recipeRepository.create(recipe);
  }
}
