import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';
import { PostService } from './services/post.service';
import { inject } from '@angular/core';

//? You can choose below different renderMode for each route
export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Server,
  } /** it will be hydrated because SSR mode */,
  {
    path: 'contact',
    renderMode: RenderMode.Client,
  } /**It won't be hydrated because it is render CSR not SSR */,
  {
    path: 'product/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const posts = inject(PostService);
      const ids = await posts.getPosts();
      return ids.map((id) => ({ id: `${id}` }));
    },
    fallback: PrerenderFallback.None,
  } /** it will be hydrated because SSG mode */,
];
