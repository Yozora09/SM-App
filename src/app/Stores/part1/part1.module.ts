import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Part1PageRoutingModule } from './part1-routing.module';

import { Part1Page } from './part1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Part1PageRoutingModule
  ],
  declarations: [Part1Page]
})
export class Part1PageModule {}
