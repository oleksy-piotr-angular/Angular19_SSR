import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';
import { PostService } from './services/post.service';
import { inject } from '@angular/core';

//? You can choose below different renderMode for each route
export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Server,
  } /**Server-Side Rendering (SSR) mode, where content is rendered on the server for each request. */,
  {
    path: 'contact',
    renderMode: RenderMode.Client,
  } /**Client-Side Rendering (CSR) mode, where content is rendered on the client side in the browser. */,

  //! PRERENDER:
  //? with settings below those "ids" for products will be render as static HTML after build.
  {
    path: 'product/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      //!we can do this statically like this
      //return [{ id: '1' }, { id: '2' }];

      //?-----------------------------------------------------------------------------------------

      //!or more dynamically with PostService:
      const posts = inject(PostService);

      // need to await when call this method because it will return a Promise
      const ids = await posts.getPosts();

      //transform the array with map before return
      return ids.map((id) => ({ id: `${id}` }));
    },
    fallback: PrerenderFallback.None,
  } /**Static Site Generation (SSG) mode, where content is pre-rendered at build time and served as static files. */,
];
