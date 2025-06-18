import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { Home2Component } from './home2/home2.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home2', component: Home2Component },
  { path: 'contact', component: ContactComponent },
  { path: 'product/:id', component: ProductComponent },
];
