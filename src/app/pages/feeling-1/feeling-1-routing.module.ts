import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Feeling1Page } from './feeling-1.page';

const routes: Routes = [
  {
    path: '',
    component: Feeling1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Feeling1PageRoutingModule {}
