import { Component, OnInit } from '@angular/core';
import {IBook} from '../ibook';
import {Router} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  books: IBook[] = [];
  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.bookService.getAll().subscribe((resp: IBook[]) => {
      console.log(resp);
      this.books = resp;
    });
  }

  delete(id) {
    if (confirm('Xác nhận xóa cuốn sách ?')) {
      this.bookService.deleteBook(id).subscribe((resp: IBook) => {
          this.getAll();
      });
    }
  }

}
