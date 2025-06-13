import {
  afterNextRender,
  afterRender,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('content') contentRef!: ElementRef;
  title = 'angular-ssr';

  constructor() {
    //Register a callback to be invoked the next time the application finishes rendering, during the
    // mixedReadWrite phase.
    afterNextRender(() => {
      //!if SSR and we would like to do some LOGIC it is better to use this method instead Angular Hooks
      const contentHeight = this.contentRef.nativeElement.scrollHeight;
      console.log('Content height in browser[afterNextRender]:', contentHeight);
    });

    //Register a callback to be invoked each time the application finishes rendering, during the
    // mixedReadWrite phase.
    //! After render will execute every time whenever change detection cycle occurs.
    afterRender(() => {
      const contentHeight = this.contentRef.nativeElement.scrollHeight;
      console.log('Content height in browser[afterRender]:', contentHeight);
    });
  }

  ngOnInit(): void {
    console.log(
      'this.element[ElementRef]: ',
      this.contentRef,
      '<= if SSR Undefined in "ngOnInit()"'
    ); //"Undefined" in SSR mode
  }

  ngAfterViewInit(): void {
    console.log(
      'this.element[ElementRef]: ',
      this.contentRef,
      '<= if SSR it works in "ngAfterViewInit()"'
    ); //"give us
  }

  //!Angular gives us a new lifecycle hook to get a 'ViewChild":
}
