import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name: string = 'Ismail';
  tasks: any[] = [
    { id: 0, title: 'Apprendre Angular', dueDate: '2024-06-01', completed: true },
    { id: 1, title: 'Apprendre React', dueDate: '2024-06-02', completed: false },
    { id: 2, title: 'Apprendre Vue', dueDate: '2024-06-03', completed: false },
  ];

  disabled: boolean = false;

  rename(): void {
    this.name = 'Makrouf Ismail';
  }
  deleteName(): void {
    this.name = '';
  }
}
