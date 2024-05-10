import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Feeling2PageRoutingModule } from './feeling-2-routing.module';

import { Feeling2Page } from './feeling-2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Feeling2PageRoutingModule
  ],
  declarations: [Feeling2Page]
})
export class Feeling2PageModule {}
