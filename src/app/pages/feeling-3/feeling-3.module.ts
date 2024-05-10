import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Feeling3PageRoutingModule } from './feeling-3-routing.module';

import { Feeling3Page } from './feeling-3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Feeling3PageRoutingModule
  ],
  declarations: [Feeling3Page]
})
export class Feeling3PageModule {}
