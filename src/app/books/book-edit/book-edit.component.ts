import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {IBook} from '../ibook';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})

export class BookEditComponent implements OnInit {

  editBookForm: FormGroup;

  constructor(private bookService: BookService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router) {
  }

  id = +this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    console.log(this.id);
    this.editBookForm = this.fb.group({
      id: [''], title: [''], author: [''], description: ['']
    });
    this.findById();
  }

  findById(): void {
    this.bookService.findById(this.id).subscribe((resp: IBook) => {
        this.editBookForm.patchValue(resp);
    });
  }

  update(): void {
    let data: IBook = this.editBookForm.value;
    this.bookService.update(data, this.id).subscribe((resp: IBook) => {
        this.router.navigate(['/']);
    });
  }
}
