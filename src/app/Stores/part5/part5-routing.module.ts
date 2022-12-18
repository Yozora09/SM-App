import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Part5Page } from './part5.page';

const routes: Routes = [
  {
    path: '',
    component: Part5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Part5PageRoutingModule {}
