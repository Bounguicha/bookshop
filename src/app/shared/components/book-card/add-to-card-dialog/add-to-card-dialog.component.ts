import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {BookService} from "../../../../core/services/book.service";

@Component({
  selector: 'app-add-to-card-dialog',
  templateUrl: './add-to-card-dialog.component.html',
  styleUrls: ['./add-to-card-dialog.component.scss'],
  encapsulation: ViewEncapsulation. None,
})
export class AddToCardDialogComponent implements OnInit {
  bookData: object
  selectedBooksNumber: Number
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
    this.bookData = {
      title: this.data.title,
      bookCode: this.data.bookCode,
      imageUrl: this.data.imageUrl,
      currentPrice: this.data.currentPrice,
    }
    this.getBooksList();
  }
  getBooksList() {
    this.bookService.shopCardProduct$.subscribe( (data) => {
      console.log('selected on toolbar menu', data);
      this.selectedBooksNumber = data.length
    })
  }
}
