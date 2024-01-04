/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CourseEntity } from '../course/course.entity';

@Entity()
export class ChapterEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty({ type: Number, description: 'Chapter ID' })
  id: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Chapter title', example: 'Chapter 1' })
  title: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Chapter content', example: 'Content of chapter 1' })
  content: string;

  @ManyToOne(() => CourseEntity, course => course.chapters)
  course: CourseEntity;
}
