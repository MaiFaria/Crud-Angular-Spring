import { Component, inject } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courses: Course[] = [{ _id: '1', name: 'Angular', category: 'Frontend' }];
  displayedColumns = ['name', 'category'];

  private readonly coursesService = inject(CoursesService);
}
