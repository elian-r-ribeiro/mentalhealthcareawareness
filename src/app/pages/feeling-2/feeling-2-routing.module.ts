import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Feeling2Page } from './feeling-2.page';

const routes: Routes = [
  {
    path: '',
    component: Feeling2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Feeling2PageRoutingModule {}
