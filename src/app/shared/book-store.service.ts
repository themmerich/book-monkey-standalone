import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private api = 'https://api4.angular-buch.com';
  private http = inject(HttpClient);

  getAll(): Observable<Book[]> {
    return this.http.get<any[]>(`${this.api}/book`);
  }
  getSingle(isbn: string): Observable<Book> {
    return this.http.get<any>(`${this.api}/book/${isbn}`);
  }
  remove(isbn: string): Observable<any> {
    return this.http.delete(
      '${this.api}/books/${isbn}',
      { responseType: 'text'});
  }
}
