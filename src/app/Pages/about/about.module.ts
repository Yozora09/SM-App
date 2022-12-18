import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ABoutPageRoutingModule } from './about-routing.module';

import { ABoutPage } from './about.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ABoutPageRoutingModule
  ],
  declarations: [ABoutPage]
})
export class ABoutPageModule {}
