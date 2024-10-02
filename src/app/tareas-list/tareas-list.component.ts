import { Component } from '@angular/core';
import { Task } from "../models/task";
import { MaterialModule } from "../material/material.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-tareas-list',
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './tareas-list.component.html',
  styleUrls: ['./tareas-list.component.scss']
})
export class TareasListComponent {

  tasks: Task[] = [
    {
      id: 1,
      name: 'Tarea A',
      dueDate: '2024-10-01',
      completed: true,
      assignedTo: [
        {
          fullName: 'Juan Perez',
          age: 25,
          skills: ['Javascript', 'Angular']
        },
        {
          fullName: 'Maria Lopez',
          age: 30,
          skills: ['Typescript', 'CSS']
        }
      ]
    },
    {
      id: 2,
      name: 'Tarea B',
      dueDate: '2024-09-25',
      completed: false,
      assignedTo: [
        {
          fullName: 'Carlos Gomez',
          age: 40,
          skills: ['HTML', 'SCSS']
        }
      ]
    }
  ];

  filteredTasks: Task[] = this.tasks;

  filter(status: 'all' | 'completed' | 'pending') {
    this.filteredTasks = this.tasks.filter(task => {
      if (status === 'all') {
        return true;
      } else if (status === 'completed') {
        return task.completed;
      } else {
        return !task.completed;
      }
    });
  };
}
