import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

export interface Product {
  id: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  http = inject(HttpClient); //service is available as an injectable
  // class, with methods to perform HTTP requests

  route = inject(ActivatedRoute); //to get requested params "id"
  product$: Observable<Product> | null = null;

  ngOnInit(): void {
    //return an observable
    this.product$ = this.route.params.pipe(
      switchMap((params) => {
        //first get "id"
        const id = params['id'];

        //then return another Observable
        return this.http.get<Product>(
          `http://localhost:3000/api/product/${id}`
        );
      })
    );
  }
}
