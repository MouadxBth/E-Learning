/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto';

@Injectable()
export class ChapterService {
  create(createChapterDto: CreateChapterDto) {
    return 'Ajouter un chapitre';
  }

  getAllChapters() {
    return `Afficher tous les chapitres`;
  }

  getChapterById(id: number) {
    return `Afficher ce chapitre : #${id}`;
  }

  update(id: number, updateChapterDto: UpdateChapterDto) {
    return `Mettre à jour le chapitre suivant : #${id}`;
  }

  delete(id: number) {
    return `Supprimer le chapitre suivant : #${id}`;
  }
}
