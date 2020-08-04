import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from './ibook';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = environment.url_api;
  constructor(private http: HttpClient) { }

  getAll(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url);
  }

  findById(id: number): Observable<IBook>{
    return this.http.get<IBook>(this.url + '/' + id);
  }

  update(data: any, id: number): Observable<IBook>{
    return this.http.put<IBook>(this.url + '/' + id, data);
  }

  createBook(book: Partial<IBook>): Observable<IBook> {
    return this.http.post<IBook>(this.url, book);
  }

  deleteBook(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
