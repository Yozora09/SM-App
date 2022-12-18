import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Part2Page } from './part2.page';

const routes: Routes = [
  {
    path: '',
    component: Part2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Part2PageRoutingModule {}
