import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Feeling3Page } from './feeling-3.page';

const routes: Routes = [
  {
    path: '',
    component: Feeling3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Feeling3PageRoutingModule {}
