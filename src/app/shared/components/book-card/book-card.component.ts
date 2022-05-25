import {Component, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddToCardDialogComponent} from "./add-to-card-dialog/add-to-card-dialog.component";
import {BookModel} from "../../models/bookModel";
import {Subject} from "rxjs";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() author: string;
  @Input() title: string;
  @Input() reviewStars: number;
  @Input() reviewsNumber: number;
  @Input() description: string;
  @Input() currentPrice: number;
  @Input() oldPrice: number;
  @Input() imageUrl: string;
  @Input() bookCode: string;
  @Output() selectedCard = new Subject<BookModel[]>();
  selectCardsArray = [];
  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }
  openAddToCardDialog() {
    const dialogRef = this.dialog.open(AddToCardDialogComponent, {
      width: '390px',
      height: '440px',
      data: {
        title: this.title,
        bookCode: this.bookCode,
        imageUrl: this.imageUrl,
        currentPrice: this.currentPrice,
      },
      panelClass: 'custom-dialog-container'
  });
    this.selectCardsArray.push({
      author: this.author,
       title: this.title,
       reviewStars: this.reviewStars,
       reviewsNumber: this.reviewsNumber,
       description: this.description,
       currentPrice: this.currentPrice,
       oldPrice: this.oldPrice,
       imageUrl: this.imageUrl,
       bookCode: this.bookCode,
    });
    this.selectedCard.next(this.selectCardsArray);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}
