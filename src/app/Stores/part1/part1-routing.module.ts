import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Part1Page } from './part1.page';

const routes: Routes = [
  {
    path: '',
    component: Part1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Part1PageRoutingModule {}
