import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'subpage',
    loadChildren: () => import('./Pages/subpage/subpage.module').then( m => m.SubpagePageModule)
  },
  {
    path: 'directory',
    loadChildren: () => import('./Pages/directory/directory.module').then( m => m.DirectoryPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./Pages/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./Pages/about/about.module').then( m => m.ABoutPageModule)
  },
  {
    path: 'part1',
    loadChildren: () => import('./Stores/part1/part1.module').then( m => m.Part1PageModule)
  },
  {
    path: 'part2',
    loadChildren: () => import('./Stores/part2/part2.module').then( m => m.Part2PageModule)
  },
  {
    path: 'part3',
    loadChildren: () => import('./Stores/part3/part3.module').then( m => m.Part3PageModule)
  },
  {
    path: 'part4',
    loadChildren: () => import('./Stores/part4/part4.module').then( m => m.Part4PageModule)
  },
  {
    path: 'part5',
    loadChildren: () => import('./Stores/part5/part5.module').then( m => m.Part5PageModule)
  },
  {
    path: 'part6',
    loadChildren: () => import('./Stores/part6/part6.module').then( m => m.Part6PageModule)
  },
  {
    path: 'part7',
    loadChildren: () => import('./Stores/part7/part7.module').then( m => m.Part7PageModule)
  },
  {
    path: 'part8',
    loadChildren: () => import('./Stores/part8/part8.module').then( m => m.Part8PageModule)
  },
  {
    path: 'part9',
    loadChildren: () => import('./Stores/part9/part9.module').then( m => m.Part9PageModule)
  },
  {
    path: 'part10',
    loadChildren: () => import('./Stores/part10/part10.module').then( m => m.Part10PageModule)
  },
  {
    path: 'part11',
    loadChildren: () => import('./Stores/part11/part11.module').then( m => m.Part11PageModule)
  },
  {
    path: 'part12',
    loadChildren: () => import('./Stores/part12/part12.module').then( m => m.Part12PageModule)
  },
  {
    path: 'part13',
    loadChildren: () => import('./Stores/part13/part13.module').then( m => m.Part13PageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
