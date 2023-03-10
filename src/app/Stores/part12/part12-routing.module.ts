import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Part12Page } from './part12.page';

const routes: Routes = [
  {
    path: '',
    component: Part12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Part12PageRoutingModule {}
