import { Recipe } from '../entities/recipe.entity';
import { RecipeRepository } from '../repositories/recepe.repository';

export class ListAllRecipesUseCase {
  constructor(private readonly recipeRepository: RecipeRepository) {}

  async execute(): Promise<Recipe[]> {
    return this.recipeRepository.findAll();
  }
}
