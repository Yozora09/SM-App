import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Part7PageRoutingModule } from './part7-routing.module';

import { Part7Page } from './part7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Part7PageRoutingModule
  ],
  declarations: [Part7Page]
})
export class Part7PageModule {}
