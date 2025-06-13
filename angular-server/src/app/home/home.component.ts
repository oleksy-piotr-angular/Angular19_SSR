import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
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
