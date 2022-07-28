import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Lista Zadań:';
  taskName = 'dupa';
  taskDate = '';
  //config: { [key: string]: string | Date } = null;
  tasks: Task[] = [
    {
      name: 'pływanie',
      deadline: '2022-02-01',
      done: false,
    },
  ];
  getFooter(): string {
    return '2022 lista zadań';
  }
  clearTasks() {
    this.tasks = [];
  }
  get getAdditionalInfo(): string {
    return 'Autor: Marcin Duda';
  }
  get getDate(): Date {
    return new Date();
  }
  createTask() {
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false,
    };
    this.tasks.push(task);
    this.taskDate = '';
    this.taskName = '';
  }
}
