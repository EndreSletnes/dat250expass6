import { Component } from '@angular/core';
import { TodoServiceService } from "../todo-service.service";
import { Todo } from "../todo";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  description: string = "";
  summary: string = "";

  constructor(private todoService: TodoServiceService) {
  }

  onSubmit() {
    const todo = new Todo(null, this.description, this.summary);

    this.todoService.save(todo);

    this.description = "";
    this.summary = "";
  }
}
