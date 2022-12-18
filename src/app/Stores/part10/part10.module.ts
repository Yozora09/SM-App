import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Part10PageRoutingModule } from './part10-routing.module';

import { Part10Page } from './part10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Part10PageRoutingModule
  ],
  declarations: [Part10Page]
})
export class Part10PageModule {}
