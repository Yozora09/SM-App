import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Part3PageRoutingModule } from './part3-routing.module';

import { Part3Page } from './part3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Part3PageRoutingModule
  ],
  declarations: [Part3Page]
})
export class Part3PageModule {}
