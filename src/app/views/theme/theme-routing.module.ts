import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListASSComponent} from './list-ass.component';

const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: 'listAss',
        component: ListASSComponent,

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
