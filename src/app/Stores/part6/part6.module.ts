import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Part6PageRoutingModule } from './part6-routing.module';

import { Part6Page } from './part6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Part6PageRoutingModule
  ],
  declarations: [Part6Page]
})
export class Part6PageModule {}
