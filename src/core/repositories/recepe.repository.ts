import { Recipe } from '../entities/recipe.entity';

export const RECIPE_REPOSITORY = Symbol('RECIPE_REPOSITORY');

export interface RecipeRepository {
  create(recipe: Recipe): Promise<Recipe>;
  findAll(): Promise<Recipe[]>;
  findById(id: string): Promise<Recipe | null>;
}
