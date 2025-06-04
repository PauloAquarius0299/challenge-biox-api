import { Recipe } from 'src/core/entities/recipe.entity';
import { RecipeRepository } from 'src/core/repositories/recepe.repository';

export class InMemoryRecipeRepository implements RecipeRepository {
  private recipes: Recipe[] = [];

  create(recipe: Recipe): Promise<Recipe> {
    this.recipes.push(recipe);
    return Promise.resolve(recipe);
  }

  async findAll(): Promise<Recipe[]> {
    await Promise.resolve();
    return [...this.recipes];
  }

  findById(id: string): Promise<Recipe | null> {
    return Promise.resolve(
      this.recipes.find((recipe) => recipe.id === id) || null,
    );
  }
}
