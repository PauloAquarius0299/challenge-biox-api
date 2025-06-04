import { Recipe } from '../../core/entities/recipe.entity';
import { InMemoryRecipeRepository } from './in-memory-recipe.repository';

describe('InMemoryRecipeRepository', () => {
  let repository: InMemoryRecipeRepository;

  beforeEach(() => {
    repository = new InMemoryRecipeRepository();
  });

  describe('create', () => {
    it('should add a new recipe to the repository', async () => {
      const recipe = new Recipe(
        '1',
        'Test Recipe',
        'Test Description',
        ['ing1', 'ing2'],
        new Date(),
        new Date(),
      );

      const result = await repository.create(recipe);

      expect(result).toEqual(recipe);
      expect(await repository.findAll()).toContainEqual(recipe);
    });
  });

  describe('findAll', () => {
    it('should return an empty array when no recipes exist', async () => {
      const result = await repository.findAll();
      expect(result).toEqual([]);
    });

    it('should return all recipes', async () => {
      const recipe1 = new Recipe(
        '1',
        'Recipe 1',
        'Desc 1',
        ['ing1'],
        new Date(),
        new Date(),
      );
      const recipe2 = new Recipe(
        '2',
        'Recipe 2',
        'Desc 2',
        ['ing2'],
        new Date(),
        new Date(),
      );

      await repository.create(recipe1);
      await repository.create(recipe2);

      const result = await repository.findAll();
      expect(result).toEqual([recipe1, recipe2]);
    });
  });

  describe('findById', () => {
    it('should return null when recipe does not exist', async () => {
      const result = await repository.findById('999');
      expect(result).toBeNull();
    });

    it('should return the correct recipe when it exists', async () => {
      const recipe = new Recipe(
        '123',
        'Test Recipe',
        'Test Description',
        ['ing1'],
        new Date(),
        new Date(),
      );

      await repository.create(recipe);
      const result = await repository.findById('123');

      expect(result).toEqual(recipe);
    });

    it('should not return other recipes', async () => {
      const recipe1 = new Recipe(
        '1',
        'Recipe 1',
        'Desc 1',
        ['ing1'],
        new Date(),
        new Date(),
      );
      const recipe2 = new Recipe(
        '2',
        'Recipe 2',
        'Desc 2',
        ['ing2'],
        new Date(),
        new Date(),
      );

      await repository.create(recipe1);
      await repository.create(recipe2);

      const result = await repository.findById('1');
      expect(result).toEqual(recipe1);
      expect(result).not.toEqual(recipe2);
    });
  });
});
