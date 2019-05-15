import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Grant } from './grant';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};
const grantUrl = 'http://localhost:5000/api/service/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result? :T){
    return (error: any): Observable<T> => {
      // Send the error to a remote logging service....
      console.error(error);

      // Let the application keep running by returning an empty result.
      return of(result as T);
    }
  }

  getGrants (): Observable<Grant[]> {
    return this.http.get<Grant[]>(grantUrl+"grant/getall")
      .pipe(
        tap(grants => console.log('fetched Grants')),
        catchError(this.handleError('getGrants', []))
      );
  }
}
