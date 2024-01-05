/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CourseEntity } from './course.entity';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';


@Module({
  imports: [CourseEntity],
  controllers: [CourseController],
	providers: [CourseService],
})
export class Course {}