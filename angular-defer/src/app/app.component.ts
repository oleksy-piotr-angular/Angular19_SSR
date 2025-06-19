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
  //! you can modify this property in Angular DevTools when you click
  //! Inspect the App and change this property there
  showLargeComponent = false;
}
