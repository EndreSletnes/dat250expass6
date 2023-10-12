import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Todo } from "./todo";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  private todosUrl: string;

  constructor(private http: HttpClient) {
    this.todosUrl = 'http://localhost:8080/todos'
  }

  public findAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
  }

  public save(todo: Todo) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    const body = {
      "summary": todo.summary,
      "description": todo.description
    };

    return this.http.post<Todo>(this.todosUrl, todo, httpOptions).subscribe(data => {
      console.log(data)
    });
  }

  public delete(todo: Todo) {
    const deleteUrl = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(deleteUrl)
  }
}
