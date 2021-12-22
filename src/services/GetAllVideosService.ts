import { getRepository } from 'typeorm';
import { Video } from '../entities/Video';

export class GetAllVideosService {
  async execute(): Promise<Video[]> {
    const repo = getRepository(Video);

    const videos = await repo.find({
      relations: ['category'],
    });

    return videos;
  }
}
