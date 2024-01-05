import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule,FormsModule],
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'], 
})
export class CoursesComponent {
  courses = [
    {
      title: 'Angular Basics',
      description: 'Learn the fundamentals of Angular framework.',
      category: 'Web Development',
      author: 'YOUNES MOUSTAQUIM',
      creationDate: new Date('2022-01-01'),
      lastUpdateDate: new Date('2022-01-15'),
      reviews: 4.5,
    },
    {
      title: 'Mongo DB ',
      description: 'Learn the basics of mongodb.',
      category: 'Databases',
      author: 'YOUNES MOUSTAQUIM',
      creationDate: new Date('2022-01-01'),
      lastUpdateDate: new Date('2022-01-15'),
      reviews: 4.5,
    },
    {
      title: 'React JS',
      description: 'Learn my react js course for beginners.',
      category: 'Web Development',
      author: 'YOUNES MOUSTAQUIM',
      creationDate: new Date('2022-02-01'),
      lastUpdateDate: new Date('2022-02-20'),
      reviews: 4.2,
    },
    {
      title: 'Express JS',
      description: 'Learn Express Js by creating an API.',
      category: 'Backend Development',
      author: 'YOUNES MOUSTAQUIM',
      creationDate: new Date('2022-02-01'),
      lastUpdateDate: new Date('2022-02-20'),
      reviews: 4.2,
    },
    {
      title: 'J2EE',
      description: 'Learn how to Master Java Enterprise Edition',
      category: 'Programming',
      author: 'YOUNES MOUSTAQUIM',
      creationDate: new Date('2022-02-01'),
      lastUpdateDate: new Date('2022-02-20'),
      reviews: 4.2,
    },
    {
    title: 'POOP',
    description: 'python object oriented programming ',
    category: 'Programming',
    author: 'YOUNES MOUSTAQUIM',
    creationDate: new Date('2022-02-01'),
    lastUpdateDate: new Date('2022-02-20'),
    reviews: 4.2,
  },

  ];
  
}
