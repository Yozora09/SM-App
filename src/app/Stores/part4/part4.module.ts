import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Part4PageRoutingModule } from './part4-routing.module';

import { Part4Page } from './part4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Part4PageRoutingModule
  ],
  declarations: [Part4Page]
})
export class Part4PageModule {}
