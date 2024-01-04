/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { ChapterEntity } from './chapter.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('chapters')
@Controller('chapters')
export class ChapterController {
  constructor(private readonly chapterService: ChapterService) {}

  @Get()
  getAllChapters(): Promise<ChapterEntity[]> {
    return this.chapterService.getAllChapters();
  }

  @Get(':id')
  getChapterById(@Param('id') id: number): Promise<ChapterEntity> {
    return this.chapterService.getChapterById(id);
  }

  @Post()
  createChapter(@Body() chapterData: ChapterEntity): Promise<ChapterEntity> {
    return this.chapterService.createChapter(chapterData);
  }

  @Put(':id')
  updateChapter(@Param('id') id: number, @Body() chapterData: ChapterEntity): Promise<ChapterEntity> {
    return this.chapterService.updateChapter(id, chapterData);
  }

  @Delete(':id')
  deleteChapter(@Param('id') id: number): Promise<void> {
    return this.chapterService.deleteChapter(id);
  }
}
