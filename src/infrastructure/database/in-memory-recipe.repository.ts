import { Recipe } from 'src/core/entities/recipe.entity';
import { RecipeRepository } from 'src/core/repositories/recepe.repository';

export class InMemoryRecipeRepository implements RecipeRepository {
  private recipes: Recipe[] = [];

  async create(recipe: Recipe): Promise<Recipe> {
    this.recipes.push(recipe);
    return recipe;
  }

  async findAll(): Promise<Recipe[]> {
    return [...this.recipes];
  }

  async findById(id: string): Promise<Recipe | null> {
    const recipe = this.recipes.find((recipe) => recipe.id === id) || null;
    return recipe;
  }
}
