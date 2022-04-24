import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-add-to-card-dialog',
  templateUrl: './add-to-card-dialog.component.html',
  styleUrls: ['./add-to-card-dialog.component.scss'],
  encapsulation: ViewEncapsulation. None,
})
export class AddToCardDialogComponent implements OnInit {
  bookData: object
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.bookData = {
      title: this.data.title,
      bookCode: this.data.bookCode,
      imageUrl: this.data.imageUrl,
      currentPrice: this.data.currentPrice,
    }
  }

}
