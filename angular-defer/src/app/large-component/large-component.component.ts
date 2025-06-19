import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-large-component',
  imports: [],
  templateUrl: './large-component.component.html',
  styleUrl: './large-component.component.scss',
})
export class LargeComponentComponent implements OnInit {
  ngOnInit(): void {
    console.log('large component loaded');
  }
}
