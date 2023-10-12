import { Component, OnInit } from '@angular/core';
import {TodoServiceService} from "../todo-service.service";
import {Todo} from "../todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    todos: Todo[] = [];

    constructor(private todoService: TodoServiceService) {
    }

    ngOnInit() {
      this.refreshTodos();
    }

    deleteTodo(todo: Todo) {
      this.todoService.delete(todo).subscribe(data => {
        this.todos = this.todos.filter(_todo => _todo.id !== todo.id);
      })
    }

    refreshTodos() {
      this.todoService.findAll().subscribe(data => {
        this.todos = data;
      });
    }
}
