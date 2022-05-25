import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../../../core/services/book.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  booksList;
  constructor(
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
    this.booksList = this.getBooks();
  }
  getBooks() {
    return this.bookService.getBooks();
  }

  getSelectedCards(event: any) {
    console.log('event', event);
    this.bookService.addToCart(event)
  }
}
