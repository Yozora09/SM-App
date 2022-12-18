import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Part13PageRoutingModule } from './part13-routing.module';

import { Part13Page } from './part13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Part13PageRoutingModule
  ],
  declarations: [Part13Page]
})
export class Part13PageModule {}
