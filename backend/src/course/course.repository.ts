/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseEntity } from './course.entity';

@Injectable()
export class CourseRepository {
	constructor(
		@InjectRepository(CourseEntity)
		private readonly courseRepository: Repository<CourseEntity>,
	) {}

	async getAllChapters(): Promise<CourseEntity[]> {
		return await this.courseRepository.find();
	}

	async getChapterById(id: number): Promise<CourseEntity> {
		return await this.courseRepository.findOne({ where: { id } });
	}
}
