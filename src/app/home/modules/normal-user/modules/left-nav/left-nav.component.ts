import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {

  constructor() { }
  bookListCategories = [
    'Bestsellers',
    'Art & Fashion',
    'Biography',
    'Business',
    'Children\'s',
    'Education'
  ]
  selectedCategory = 'Bestsellers'
  ngOnInit(): void {
  }
  changeCategory(category) {
    this.selectedCategory = category;
  }
}
