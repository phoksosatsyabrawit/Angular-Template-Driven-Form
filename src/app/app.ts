import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { Student } from './models/student';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-form');

  subjects = [
    'Java', 'C#', 'TypeScript', 'jQuery', 'Angular'
  ];

  student = new Student('steve', 'steve@gamil.com', 'male', 'Java');
}
