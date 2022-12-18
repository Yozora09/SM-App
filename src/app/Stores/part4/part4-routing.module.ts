import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Part4Page } from './part4.page';

const routes: Routes = [
  {
    path: '',
    component: Part4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Part4PageRoutingModule {}
