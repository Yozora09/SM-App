import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Part9Page } from './part9.page';

const routes: Routes = [
  {
    path: '',
    component: Part9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Part9PageRoutingModule {}
