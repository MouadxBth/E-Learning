/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChapterEntity } from './chapter.entity';

@Injectable()
export class ChapterService {
  constructor(
    @InjectRepository(ChapterEntity)
    private readonly chapterRepository: Repository<ChapterEntity>,
  ) {}

  async getAllChapters(): Promise<ChapterEntity[]> {
    return await this.chapterRepository.find();
  }

  async getChapterById(id: number): Promise<ChapterEntity | undefined> {
    return await this.chapterRepository.findOne({ where: { id } });
  }

  async createChapter(chapterData: Partial<ChapterEntity>): Promise<ChapterEntity> {
    const newChapter = this.chapterRepository.create(chapterData);
    return await this.chapterRepository.save(newChapter);
  }

  async updateChapter(id: number, chapterData: Partial<ChapterEntity>): Promise<ChapterEntity | undefined> {
    await this.chapterRepository.update(id, chapterData);
    return await this.chapterRepository.findOne({ where: { id } });
  }

  async deleteChapter(id: number): Promise<void> {
    await this.chapterRepository.delete(id);
  }
}
