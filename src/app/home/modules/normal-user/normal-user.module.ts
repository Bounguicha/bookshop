import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NormalUserRoutingModule } from './normal-user-routing.module';
import {MenuComponent} from "./modules/menu/menu.component";
import {HomeComponent} from "./modules/home/home.component";
import {BookListComponent} from "./modules/book-list/book-list.component";
import {LeftNavComponent} from "./modules/left-nav/left-nav.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {AppModule} from "../../../app.module";
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    BookListComponent,
    LeftNavComponent,
  ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        NormalUserRoutingModule,
        MatToolbarModule,
        MatCardModule,
        SharedModule
    ]
})
export class NormalUserModule { }
