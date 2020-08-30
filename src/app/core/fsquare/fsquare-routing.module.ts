import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FsquarePage } from './fsquare.page';

const routes: Routes = [
  {
    path: '',
    component: FsquarePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FsquarePageRoutingModule {}
