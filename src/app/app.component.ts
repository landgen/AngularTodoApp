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
  config: { [key: string]: string } | null  = null;
  tasks: Task[] = [
    {
      name: 'pływanie',
      deadline: '2022-02-01',
      done: false,
    },
  ];
  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Lista zadań',
        footer: '© Lista zadań zbudowana w Angularze.',
        date: new Date().toDateString(),
      };
    }, 500);
    this.sortTasks();
  }
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
    this.sortTasks();
  }
  markTaskAsDone(task: Task) {
    task.done = true;
    this.sortTasks();
  }
  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(e => e != task);
    this.sortTasks();
  }
  private sortTasks() {
    this.tasks = this.tasks.sort((a: Task, b: Task) => 
    a.done === b.done ? 0 : a.done? 1 : -1)
  }
}
