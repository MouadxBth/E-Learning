/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseEntity } from './course.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(CourseEntity)
    private readonly courseRepository: Repository<CourseEntity>,
  ) {}

  async getAllCourses(): Promise<CourseEntity[]> {
    return await this.courseRepository.find();
  }

  async getCourseById(id: number): Promise<CourseEntity> {
    return await this.courseRepository.findOne({ where: { id } });
  }

  async createCourse(courseData: CourseEntity): Promise<CourseEntity> {
    const newCourse = this.courseRepository.create(courseData);
    return await this.courseRepository.save(newCourse);
  }

  async updateCourse(id: number, courseData: CourseEntity): Promise<CourseEntity> {
    await this.courseRepository.update(id, courseData);
    return await this.courseRepository.findOne({ where: { id } });
  }

  async deleteCourse(id: number): Promise<void> {
    await this.courseRepository.delete(id);
  }
}
