import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Part13Page } from './part13.page';

const routes: Routes = [
  {
    path: '',
    component: Part13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Part13PageRoutingModule {}
