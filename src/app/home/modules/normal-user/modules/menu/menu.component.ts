import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../../../core/services/book.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private bookService: BookService,
  ) { }
  selectedBooksNumber = 0
  ngOnInit(): void {
    this.getBooksList();
  }
  getBooksList() {
    this.bookService.shopCardProduct$.subscribe( (data) => {
      console.log('selected on toolbar menu', data);
      this.selectedBooksNumber = data.length
    })
  }
}
