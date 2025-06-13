import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { title } from 'process';
import { Observable } from 'rxjs';

// Interfejs reprezentujący pojedynczy post.
// Interface for a single post object.
export interface Post {
  id: number;
  title: string;
  body: string;
}

// Komponent prezentujący pobieranie i dodawanie postów z użyciem HttpClient.
// SSR: GET requests są cache'owane domyślnie, POST można cache'ować opcjonalnie.
@Component({
  selector: 'app-http-cache',
  imports: [AsyncPipe],
  templateUrl: './http-cache.component.html',
  styleUrl: './http-cache.component.scss',
})
export class HttpCacheComponent implements OnInit {
  // Observable z listą postów (GET).
  posts$: Observable<Post[]> | null = null;
  // Observable z pojedynczym postem (POST).
  singlePost$: Observable<Post> | null = null;

  // Wstrzyknięcie HttpClient do obsługi żądań HTTP.
  http = inject(HttpClient);

  // Po inicjalizacji komponentu pobierz posty.
  ngOnInit(): void {
    this.getPosts();
  }

  // Pobierz listę postów (GET) - cache'owane w SSR.
  getPosts() {
    //? In SSR "get()" is cached by default also
    this.posts$ = this.http.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }

  // Dodaj nowy post (POST) - domyślnie nie jest cache'owane w SSR.
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
    // Aby cache'ować POST, ustaw includePostRequests: true w konfiguracji SSR.
  }
}
