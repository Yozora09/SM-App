import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Part9PageRoutingModule } from './part9-routing.module';

import { Part9Page } from './part9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Part9PageRoutingModule
  ],
  declarations: [Part9Page]
})
export class Part9PageModule {}
