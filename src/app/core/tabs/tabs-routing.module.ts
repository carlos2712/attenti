import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'places',
        loadChildren: () => import('../placesTab/places.module').then(m => m.PlacesPageModule)
      },
      {
        path: 'fsquare',
        loadChildren: () => import('../fsquare/fsquare.module').then(m => m.FsquarePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/places',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/places',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
