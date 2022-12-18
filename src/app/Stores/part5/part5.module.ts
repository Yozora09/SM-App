import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Part5PageRoutingModule } from './part5-routing.module';

import { Part5Page } from './part5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Part5PageRoutingModule
  ],
  declarations: [Part5Page]
})
export class Part5PageModule {}
