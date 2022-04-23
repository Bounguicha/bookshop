import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookCardComponent} from "./components/book-card/book-card.component";
import {ReviewsLevelComponent} from "./components/reviews-level/reviews-level.component";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";



@NgModule({
  declarations: [BookCardComponent, ReviewsLevelComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule
  ],
  exports: [
    BookCardComponent
  ]
})
export class SharedModule { }
