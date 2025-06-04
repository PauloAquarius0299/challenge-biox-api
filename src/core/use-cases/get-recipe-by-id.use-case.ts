import { RecipeRepository } from '../repositories/recepe.repository';

export class GetRecipeByIdUseCase {
  constructor(private readonly recipeRepository: RecipeRepository) {}

  async execute(id: string) {
    return this.recipeRepository.findById(id);
  }
}
