import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  host: { ngSkipHydration: 'true' } /* To skip hydration in this component */,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe();
  }
}
