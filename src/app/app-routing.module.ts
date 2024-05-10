import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'feeling-1',
    loadChildren: () => import('./pages/feeling-1/feeling-1.module').then(m => m.Feeling1PageModule)
  },
  {
    path: 'feeling-2',
    loadChildren: () => import('./pages/feeling-2/feeling-2.module').then(m => m.Feeling2PageModule)
  },
  {
    path: 'feeling-3',
    loadChildren: () => import('./pages/feeling-3/feeling-3.module').then(m => m.Feeling3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
