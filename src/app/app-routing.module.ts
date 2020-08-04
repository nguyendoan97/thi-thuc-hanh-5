import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookDetailComponent} from './books/book-detail/book-detail.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./books/books.module').then(m => m.BooksModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
