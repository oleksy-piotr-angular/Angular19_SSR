import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpCacheComponent } from './http-cache/http-cache.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'httpcache', component: HttpCacheComponent },
  { path: 'products/:id', component: ProductComponent },
];
