import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Part8Page } from './part8.page';

const routes: Routes = [
  {
    path: '',
    component: Part8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Part8PageRoutingModule {}
