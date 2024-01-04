/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { ChapterEntity } from '../chapter/chapter.entity';

@Entity()
export class CourseEntity {
	@PrimaryGeneratedColumn()
	@ApiProperty({ type: Number, description: 'Course ID' })
	id: number;

	@Column()
	@IsString()
	@IsNotEmpty()
	@ApiProperty({
		type: String,
		description: 'Course name',
		example: 'Web Development',
	})
	name: string;

	@Column()
	@IsString()
	@IsNotEmpty()
	@ApiProperty({
		type: String,
		description: 'Course title',
		example: 'Introduction to HTML',
	})
	title: string;

	@Column()
	@IsString()
	@IsNotEmpty()
	@ApiProperty({
		type: String,
		description: 'Course category',
		example: 'Programming',
	})
	category: string;

	@Column()
	@IsString()
	@IsNotEmpty()
	@ApiProperty({
		type: String,
		description: 'Course description',
		example: 'Learn the basics of HTML',
	})
	description: string;

	@OneToMany(() => ChapterEntity, (chapter) => chapter.course)
	chapters: ChapterEntity[];
}
