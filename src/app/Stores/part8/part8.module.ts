import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Part8PageRoutingModule } from './part8-routing.module';

import { Part8Page } from './part8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Part8PageRoutingModule
  ],
  declarations: [Part8Page]
})
export class Part8PageModule {}
