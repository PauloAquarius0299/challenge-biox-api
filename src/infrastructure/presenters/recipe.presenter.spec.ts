import { Recipe } from '../../core/entities/recipe.entity';
import { RecipePresenter } from './recipe.presenter';

describe('RecipePresenter', () => {
  const mockDate = new Date('2024-01-01T00:00:00.000Z');

  it('should format recipe correctly', () => {
    const recipe = new Recipe(
      '123',
      'Test Recipe',
      'Test Description',
      ['ing1', 'ing2'],
      mockDate,
      mockDate,
    );

    const result = RecipePresenter.toHTTP(recipe);

    expect(result).toEqual({
      id: '123',
      title: 'Test Recipe',
      description: 'Test Description',
      ingredients: ['ing1', 'ing2'],
      createdAt: mockDate.toISOString(),
      updatedAt: mockDate.toISOString(),
    });
  });
});
