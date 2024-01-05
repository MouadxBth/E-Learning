/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Course } from './course/course.module';
import { Chapter } from './chapter/chapter.module';

@Module({
	imports: [Course, Chapter],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
