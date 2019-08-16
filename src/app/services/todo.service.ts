import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './../models/todo.class';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
   API: string = `https://5d30356e45e2b00014d9312c.mockapi.io/api/v1/test/todolist`;
  constructor(
    public http: HttpClient,
  ) { }

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.API, todo);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    console.log('todo', todo);
    return this.http.put<Todo>(`${this.API}/${todo.id}`, todo);
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${this.API}/${id}`);
  }

  handleError(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      console.log(`Client-side error: ${err.error.message}`);
    } else {
      console.log(`Server-side error: ${err.status} - ${err.error}`);
    }
  }
}
