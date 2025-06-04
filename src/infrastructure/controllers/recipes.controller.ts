import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRecipeUseCase } from 'src/core/use-cases/create-recipe.use-case';
import { GetRecipeByIdUseCase } from 'src/core/use-cases/get-recipe-by-id.use-case';
import { ListAllRecipesUseCase } from 'src/core/use-cases/list-all-recipes.use-case';
import { RecipePresenter } from '../presenters/recipe.presenter';

@Controller('recipes')
export class RecipesController {
  constructor(
    private readonly createRecipeUseCase: CreateRecipeUseCase,
    private readonly listAllRecipesUseCase: ListAllRecipesUseCase,
    private readonly getRecipeByIdUseCase: GetRecipeByIdUseCase,
  ) {}

  @Post()
  async create(
    @Body() body: { title: string; description: string; ingredients: string[] },
  ) {
    const recipe = await this.createRecipeUseCase.execute(
      body.title,
      body.description,
      body.ingredients,
    );
    return RecipePresenter.toHTTP(recipe);
  }

  @Get()
  async findAll() {
    const recipes = await this.listAllRecipesUseCase.execute();
    return recipes.map((recipe) => RecipePresenter.toHTTP(recipe));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const recipe = await this.getRecipeByIdUseCase.execute(id);
    return recipe ? RecipePresenter.toHTTP(recipe) : null;
  }
}
