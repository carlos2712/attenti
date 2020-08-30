import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FsquarePage } from './fsquare.page';

import { FsquarePageRoutingModule } from './fsquare-routing.module';
import { SearchFormComponentModule } from 'src/app/shared/components/explore-container/search-form.module';
import { MapComponentModule } from 'src/app/shared/components/map/map.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SearchFormComponentModule,
    FsquarePageRoutingModule,
    MapComponentModule
  ],
  declarations: [FsquarePage]
})
export class FsquarePageModule {}
