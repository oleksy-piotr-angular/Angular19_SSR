import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpCacheComponent } from './http-cache/http-cache.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpCacheComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-ssr';
}
