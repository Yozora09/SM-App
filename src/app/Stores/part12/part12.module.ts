import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Part12PageRoutingModule } from './part12-routing.module';

import { Part12Page } from './part12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Part12PageRoutingModule
  ],
  declarations: [Part12Page]
})
export class Part12PageModule {}
