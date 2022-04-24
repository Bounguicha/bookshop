import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddToCardDialogComponent} from "./add-to-card-dialog/add-to-card-dialog.component";

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

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
