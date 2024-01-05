/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';
import { ChapterEntity } from '../chapter/chapter.entity';

@Entity()
export class CourseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	@IsString()
	@IsNotEmpty()
	title: string;

	@Column()
	@IsString()
	@IsNotEmpty()
	category: string;

	@Column()
	@IsString()
	@IsNotEmpty()
	description: string;

	@OneToMany(() => ChapterEntity, (chapter) => chapter.course)
	chapters: ChapterEntity[];
}
