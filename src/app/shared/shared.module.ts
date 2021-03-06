import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookCardComponent} from "./components/book-card/book-card.component";
import {ReviewsLevelComponent} from "./components/reviews-level/reviews-level.component";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatDialogModule} from '@angular/material/dialog';
import { AddToCardDialogComponent } from './components/book-card/add-to-card-dialog/add-to-card-dialog.component';
import {MatBadgeModule} from '@angular/material/badge';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [BookCardComponent, ReviewsLevelComponent, AddToCardDialogComponent],
    imports: [
        CommonModule,
        MatCardModule,
        FlexLayoutModule,
        MatDialogModule,
        MatBadgeModule,
        RouterModule
    ],
  exports: [
    BookCardComponent
  ]
})
export class SharedModule { }
