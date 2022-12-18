import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Part10Page } from './part10.page';

const routes: Routes = [
  {
    path: '',
    component: Part10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Part10PageRoutingModule {}
