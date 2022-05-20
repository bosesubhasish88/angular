import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';
import { catchError, Observable, tap, of } from 'rxjs';


const API_URI: string = 'https://jsonplaceholder.typicode.com/todos';
@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) { }

  // Get todos
  getTodos(): Observable<any> {
    return this.http.get(API_URI)
      .pipe(tap((data: any) => data),
        catchError((error: any) => of<Todo[]>([])));
  }

  updateTodos(todo: any): Observable<any> {
    return this.http
      .put(`${API_URI}/${todo.id}`, todo)
      .pipe(tap((data: any) => data),
        catchError((error: any) => of<Todo[]>([])));
  }
  // Error
//   private handleError(error: HttpErrorResponse) {
//     if (error.status === 0) {
//       // A client-side or network error occurred. Handle it accordingly.
//       console.error('An error occurred:', error.error);
//     } else {
//       // The backend returned an unsuccessful response code.
//       // The response body may contain clues as to what went wrong.
//       console.error(
//         `Backend returned code ${error.status}, body was: `, error.error);
//     }
//     // Return an observable with a user-facing error message.
//     return throwError(() => new Error('Something bad happened; please try again later.'));
//   }
}
