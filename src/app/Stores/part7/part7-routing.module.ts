import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Part7Page } from './part7.page';

const routes: Routes = [
  {
    path: '',
    component: Part7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Part7PageRoutingModule {}
