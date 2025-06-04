import { Module } from '@nestjs/common';
import { RecipesController } from './infrastructure/controllers/recipes.controller';
import { InMemoryRecipeRepository } from './infrastructure/database/in-memory-recipe.repository';
import { RECIPE_REPOSITORY } from './core/repositories/recepe.repository';
import { CreateRecipeUseCase } from './core/use-cases/create-recipe.use-case';
import { ListAllRecipesUseCase } from './core/use-cases/list-all-recipes.use-case';
import { GetRecipeByIdUseCase } from './core/use-cases/get-recipe-by-id.use-case';

@Module({
  controllers: [RecipesController],
  providers: [
    {
      provide: RECIPE_REPOSITORY,
      useClass: InMemoryRecipeRepository,
    },
    CreateRecipeUseCase,
    ListAllRecipesUseCase,
    GetRecipeByIdUseCase,
  ],
})
export class RecipesModule {}
