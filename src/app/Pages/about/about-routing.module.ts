import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ABoutPage } from './about.page';

const routes: Routes = [
  {
    path: '',
    component: ABoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ABoutPageRoutingModule {}
