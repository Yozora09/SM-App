import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Part11Page } from './part11.page';

const routes: Routes = [
  {
    path: '',
    component: Part11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Part11PageRoutingModule {}
