import { Injectable } from '@angular/core';
import {baseUrl} from '../data/data';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = baseUrl;

  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.baseUrl}/posts`);
  }
  getPostById(id): Observable<Post> {
    return  this.httpClient.get<Post>(`${this.baseUrl}/posts/${id}`);
  }
}
