import { getRepository } from 'typeorm';
import { Category } from '../entities/Category';

type CategoryUpdateRequest = {
  id: string;
  name: string;
  description: string;
};

export class UpdateCategoryService {
  async execute({ description, id, name }: CategoryUpdateRequest) {
    const repo = getRepository(Category);

    const category = await repo.findOne(id);

    if (!category) {
      throw new Error('Category not found');
    }

    category.name = name ? name : category.name;
    category.description = description ? description : category.description;

    await repo.save(category);

    return category;
  }
}
