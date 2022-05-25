import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NormalUserComponent} from "./modules/normal-user/normal-user.component";


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: '',
    component: NormalUserComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/normal-user/normal-user.module').then(m => m.NormalUserModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
