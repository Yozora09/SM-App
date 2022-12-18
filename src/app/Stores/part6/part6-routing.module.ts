import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Part6Page } from './part6.page';

const routes: Routes = [
  {
    path: '',
    component: Part6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Part6PageRoutingModule {}
