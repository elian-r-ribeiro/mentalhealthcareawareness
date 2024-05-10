import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Feeling1PageRoutingModule } from './feeling-1-routing.module';

import { Feeling1Page } from './feeling-1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Feeling1PageRoutingModule
  ],
  declarations: [Feeling1Page]
})
export class Feeling1PageModule {}
