import {Input} from "@angular/core";

export interface BookModel {
  book_code: string;
  author: string;
  title: string;
  reviewStars: number;
  reviewsNumber: number;
  description: string;
  currentPrice: number;
  oldPrice: number;
  imageUrl: string;
}
