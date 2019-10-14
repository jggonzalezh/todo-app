import { Injectable } from  '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoUrl = "https://localhost:44370/api/todo";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getTodos (): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todoUrl);
      
  }

  addTodo (todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todoUrl,todo, this.httpOptions);
  }

  updateTodo (todo: Todo): Observable<any> {
    let url = `${this.todoUrl}/${todo.id}`;
    return this.http.put(url, todo, this.httpOptions);
  }

  deleteTodo (todo: Todo ): Observable<any> {
    let url = `${this.todoUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, this.httpOptions);
  }

}
