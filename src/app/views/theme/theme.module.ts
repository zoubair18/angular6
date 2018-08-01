// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Theme Routing

import { ListASSComponent } from './list-ass.component';
import {ThemeRoutingModule} from './theme-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule
  ],
  declarations: [

    ListASSComponent,

  ]
})
export class ThemeModule { }
