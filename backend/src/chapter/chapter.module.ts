/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ChapterEntity } from './chapter.entity';
import { ChapterController } from './chapter.controller';
import { ChapterService } from './chapter.service';


@Module({
	imports: [ChapterEntity],
  controllers: [ChapterController],
	providers: [ChapterService],
})
export class Chapter {}
