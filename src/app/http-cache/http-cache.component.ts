import { AsyncPipe, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { title } from 'process';
import { Observable } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-http-cache',
  imports: [AsyncPipe],
  templateUrl: './http-cache.component.html',
  styleUrl: './http-cache.component.scss',
})
export class HttpCacheComponent implements OnInit {
  posts$: Observable<Post[]> | null = null;
  singlePost$: Observable<Post> | null = null;

  http = inject(HttpClient);
  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    //? In SSR "get()" is cached by default also
    this.posts$ = this.http.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }

  addPost() {
    //! In SSR "post()" is NOT cached by default
    this.singlePost$ = this.http.post<Post>(
      'https://jsonplaceholder.typicode.com/posts',
      { title: 'test post1', body: 'Test Body1' }
    );
    //! if we want to cache "post()" too we need to add to "providers" in "provideClientHydration()"
    //!withHttpTransferCacheOptions({
    //!   include:PostRequest: true
    //! })
  }
}
