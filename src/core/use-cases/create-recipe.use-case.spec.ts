import { Test } from '@nestjs/testing';
import { Recipe } from '../entities/recipe.entity';
import { CreateRecipeUseCase } from './create-recipe.use-case';
import { RECIPE_REPOSITORY } from '../repositories/recepe.repository';

describe('CreateRecipeUseCase', () => {
  let useCase: CreateRecipeUseCase;
  let mockRepository: {
    create: jest.Mock<Promise<Recipe>, [Recipe]>;
  };

  beforeEach(async () => {
    mockRepository = {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      create: jest.fn(),
    };

    const module = await Test.createTestingModule({
      providers: [
        CreateRecipeUseCase,
        {
          provide: RECIPE_REPOSITORY,
          useValue: mockRepository,
        },
      ],
    }).compile();

    useCase = module.get<CreateRecipeUseCase>(CreateRecipeUseCase);
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should create a recipe', async () => {
    const recipeData = {
      title: 'Test Recipe',
      description: 'Test Description',
      ingredients: ['ing1', 'ing2'],
    };

    const expectedRecipe = new Recipe(
      expect.any(String),
      recipeData.title,
      recipeData.description,
      recipeData.ingredients,
      expect.any(Date),
      expect.any(Date),
    );

    mockRepository.create.mockResolvedValue(expectedRecipe);

    const result = await useCase.execute(
      recipeData.title,
      recipeData.description,
      recipeData.ingredients,
    );

    expect(result).toEqual(expectedRecipe);
    expect(mockRepository.create).toHaveBeenCalledWith(
      expect.objectContaining({
        title: recipeData.title,
        description: recipeData.description,
        ingredients: recipeData.ingredients,
      }),
    );
  });
});
