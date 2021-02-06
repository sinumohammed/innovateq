import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user-list/user.model';
import { Blog } from '../home/blog.model';
import { Card } from '../home/card.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getCards(url: string): Observable<Card[]> {
    return this.httpClient.get<Card[]>(url);
  }

  getBlogs(url: string): Observable<Blog[]> {
    return this.httpClient.get<Blog[]>(url);
  }

  getUsers(url: string): Observable<User[]> {
    return this.httpClient.get<User[]>(url);
  }
}


