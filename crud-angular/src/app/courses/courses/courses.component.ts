import { Component, inject } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courses: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  private readonly coursesService = inject(CoursesService);

  constructor() {
    this.courses = this.coursesService.list();
  }
}
