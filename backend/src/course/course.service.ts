/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
  create(createCourseDto: CreateCourseDto) {
    return 'ajouter un cours';
  }

  getAllCourses() {
    return `Afficher tous les cours`;
  }

  getCourseById(id: number) {
    return `afficher ce cours : #${id}`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `update le cours suivant : #${id}`;
  }

  delete(id: number) {
    return `supprimer le cours suivant : #${id}`;
  }
}