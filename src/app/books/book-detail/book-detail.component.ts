import { Component, OnInit } from '@angular/core';
import {IBook} from '../ibook';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../book.service';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: IBook;
  constructor(private route: ActivatedRoute,
              private bookService: BookService) { }

  id = +this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.getBook();
  }

  getBook() {
    this.bookService.findById(this.id).subscribe((resp: IBook) => {
      console.log(resp);
      this.book = resp;
    });
  }
}
