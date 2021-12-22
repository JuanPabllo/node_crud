import { getRepository } from 'typeorm';
import { Category } from '../entities/Category';

export class DeleteCategoryService {
  async execute(id: string) {
    const repo = getRepository(Category);

    const category = await repo.findOne(id);

    if (!category) {
      throw new Error('Category not found');
    }

    await repo.delete(id);
  }
}
