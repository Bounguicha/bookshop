import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NormalUserRoutingModule } from './normal-user-routing.module';
import {MenuComponent} from "./modules/menu/menu.component";
import {HomeComponent} from "./modules/home/home.component";
import {LeftNavComponent} from "./modules/left-nav/left-nav.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {SharedModule} from "../../../shared/shared.module";
import { PosterComponent } from './modules/poster/poster.component';


@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    LeftNavComponent,
    PosterComponent,
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
