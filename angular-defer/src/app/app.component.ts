import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LargeComponentComponent } from './large-component/large-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LargeComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-defer';
}
