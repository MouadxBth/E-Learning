/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';
import { CourseEntity } from '../course/course.entity';

@Entity()
export class ChapterEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	@IsString()
	@IsNotEmpty()
	title: string;

	@Column()
	@IsString()
	@IsNotEmpty()
	content: string;

	@ManyToOne(() => CourseEntity, (course) => course.chapters)
	course: CourseEntity;
}
