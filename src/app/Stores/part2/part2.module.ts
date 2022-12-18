import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Part2PageRoutingModule } from './part2-routing.module';

import { Part2Page } from './part2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Part2PageRoutingModule
  ],
  declarations: [Part2Page]
})
export class Part2PageModule {}
