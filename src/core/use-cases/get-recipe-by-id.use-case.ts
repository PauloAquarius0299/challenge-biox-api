import { Inject, Injectable } from '@nestjs/common';
import {
  RECIPE_REPOSITORY,
  RecipeRepository,
} from '../repositories/recepe.repository';

@Injectable()
export class GetRecipeByIdUseCase {
  constructor(
    @Inject(RECIPE_REPOSITORY)
    private readonly recipeRepository: RecipeRepository,
  ) {}

  async execute(id: string) {
    return this.recipeRepository.findById(id);
  }
}
