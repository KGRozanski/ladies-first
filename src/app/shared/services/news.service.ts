import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../post';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NewsService {
  constructor(private http: HttpClient) { }

  getNews(): Observable<Post[]> {
   return this.http.get<Post[]>('http://api.ladies-first.pl/facebook/posts');
  }


}
