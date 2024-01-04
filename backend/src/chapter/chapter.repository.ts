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

  async getChapterById(id: number): Promise<ChapterEntity> {
    return await this.chapterRepository.findOne({ where: { id } });
  }
}
