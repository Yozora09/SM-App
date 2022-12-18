import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Part3Page } from './part3.page';

const routes: Routes = [
  {
    path: '',
    component: Part3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Part3PageRoutingModule {}
