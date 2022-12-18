import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Part11PageRoutingModule } from './part11-routing.module';

import { Part11Page } from './part11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Part11PageRoutingModule
  ],
  declarations: [Part11Page]
})
export class Part11PageModule {}
