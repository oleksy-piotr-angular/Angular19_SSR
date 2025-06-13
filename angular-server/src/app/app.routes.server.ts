import { RenderMode, ServerRoute } from '@angular/ssr';

//? You can choose below different renderMode for each route
export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Server,
  } /** Server-Side Rendering (SSR) mode, where content is rendered on the server for each request. */,
  {
    path: 'contact',
    renderMode: RenderMode.Client,
  } /** Client-Side Rendering (CSR) mode, where content is rendered on the client side in the browser. */,
];
