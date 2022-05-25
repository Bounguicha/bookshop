import { Injectable } from '@angular/core';
import {BookModel} from "../../shared/models/bookModel";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: BookModel[] = [
    {
      book_code: `BOOK-${Math.floor(Math.random() * (99999 - 10000) + 10000)}`,
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
      book_code: `BOOK-${Math.floor(Math.random() * (99999 - 10000) + 10000)}`,
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
      book_code: `BOOK-${Math.floor(Math.random() * (99999 - 10000) + 10000)}`,
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
      book_code: `BOOK-${Math.floor(Math.random() * (99999 - 10000) + 10000)}`,
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
      book_code: `BOOK-${Math.floor(Math.random() * (99999 - 10000) + 10000)}`,
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
  shopCardProduct$: Subject<BookModel[]>;
  //array behind the products in the cart
  selectedBooks : BookModel[] = new Array<BookModel>() ;
  constructor() {
    this.shopCardProduct$ = new BehaviorSubject<any>(new Array<any>())
  }

  getBooks() {
    return this.books;
  }
  addToCart(book: BookModel) {
    this.selectedBooks.push(book);
    console.log('selected books array', this.selectedBooks);
    this.shopCardProduct$.next(this.selectedBooks);
    console.log('shopCardProduct', this.shopCardProduct$);
  }
}
