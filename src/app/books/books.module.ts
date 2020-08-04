import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ListBookComponent} from './list-book/list-book.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {BookAddComponent} from './book-add/book-add.component';

const route: Routes = [
  { path: '', component: ListBookComponent},
  { path: ':id/book', component: BookDetailComponent},
  { path: ':id/edit', component: BookEditComponent},
  { path: 'create', component: BookAddComponent}
];

@NgModule({
  declarations: [
    ListBookComponent,
    BookDetailComponent,
    BookEditComponent,
    BookAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(route),
  ]
})
export class BooksModule { }
