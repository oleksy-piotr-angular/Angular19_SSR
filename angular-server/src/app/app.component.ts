import {
  Component,
  inject,
  REQUEST,
  REQUEST_CONTEXT,
  RESPONSE_INIT,
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink /*ProductComponent*/],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-server';

  constructor() {
    //!Injection token representing the current HTTP request object.
    //!Use this token to access the current request when handling server-side rendering (SSR).
    const request = inject(REQUEST);
    if (request) {
      console.log('Request: ', request);
    } else {
      console.log('no Request object available');
    }

    //!Injection token for response initialization options.
    //! Use this token to provide response options for configuring or initializing HTTP responses
    //!  in server-side rendering(SSR) or API endpoints.
    const responseInit = inject(RESPONSE_INIT);

    //!After this changes below we will not get an app but only <!DOCTYPE html> version
    if (responseInit) {
      //
      //?this manipulation has an influence on this app
      responseInit.headers = {
        custom: 'custom domain',
        'content-type': 'text/html',
      };
      responseInit.status = 200;
    } else {
      console.log('no Response object available');
    }

    //!Injection token for additional request context.
    //!Use this token to pass custom metadata or context related to the current request
    //!in server-side rendering(SSR).
    const requestContext = inject(REQUEST_CONTEXT);
  }
}
