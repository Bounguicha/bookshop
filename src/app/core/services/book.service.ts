import { Injectable } from '@angular/core';
import {BookModel} from "../../shared/models/bookModel";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  books: BookModel[] = [
    {
      author: 'Author 1',
      title: 'Title 1',
      reviewStars: 3,
      reviewsNumber: 220,
      description: 'This is description for book number 1..',
      currentPrice: 220,
      oldPrice: 250,
      imageUrl: 'https://www.lasalvetat31.fr/wp-content/uploads/2019/09/Affiche-salon-du-livre-pdf.jpg',
    },
    {
      author: 'Author 2',
      title: 'Title 2',
      reviewStars: 4,
      reviewsNumber: 70,
      description: 'This is description for book number 2..',
      currentPrice: 120,
      oldPrice: 250,
      imageUrl: 'assets/img/card-example.jpg',
    },
    {
      author: 'Author 3',
      title: 'Title 3',
      reviewStars: 5,
      reviewsNumber: 360,
      description: 'This is description for book number 3..',
      currentPrice: 180,
      oldPrice: 200,
      imageUrl: 'https://fredsochard.files.wordpress.com/2018/06/affiche_insecte-filet.jpg',
    },
    {
      author: 'Author 4',
      title: 'Title 4',
      reviewStars: 3,
      reviewsNumber: 50,
      description: 'This is description for book number 4..',
      currentPrice: 50,
      oldPrice: 120,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbcgJOAKCjlXu4nAW_KJAhs8AI53-qoQXgfA&usqp=CAU',
    },
    {
      author: 'Author 5',
      title: 'Title 5',
      reviewStars: 5,
      reviewsNumber: 260,
      description: 'This is description for book number 5..',
      currentPrice: 220,
      oldPrice: 260,
      imageUrl: 'https://www.starwarsnewsnet.com/wp-content/uploads/2022/01/BobaFettPoster2.jpg',
    }
  ]
  getBooks() {
    return this.books;
  }
}
