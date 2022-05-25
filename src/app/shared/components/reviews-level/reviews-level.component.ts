import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-reviews-level',
  templateUrl: './reviews-level.component.html',
  styleUrls: ['./reviews-level.component.scss']
})
export class ReviewsLevelComponent implements OnInit {
  @Input() level: number;
  constructor() { }

  ngOnInit(): void {
  }

}
