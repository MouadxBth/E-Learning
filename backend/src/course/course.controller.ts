/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseEntity } from './course.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('courses')
@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  getAllCourses(): Promise<CourseEntity[]> {
    return this.courseService.getAllCourses();
  }

  @Get(':id')
  getCourseById(@Param('id') id: number): Promise<CourseEntity> {
    return this.courseService.getCourseById(id);
  }

  @Post()
  createCourse(@Body() courseData: CourseEntity): Promise<CourseEntity> {
    return this.courseService.createCourse(courseData);
  }

  @Put(':id')
  updateCourse(@Param('id') id: number, @Body() courseData: CourseEntity): Promise<CourseEntity> {
    return this.courseService.updateCourse(id, courseData);
  }

  @Delete(':id')
  deleteCourse(@Param('id') id: number): Promise<void> {
    return this.courseService.deleteCourse(id);
  }
}

