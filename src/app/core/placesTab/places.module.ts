import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlacesPage } from './places.page';


import { PlacesPageageRoutingModule } from './places-routing.module';
import { SearchFormComponentModule } from 'src/app/shared/components/explore-container/search-form.module';
import { MapComponentModule } from 'src/app/shared/components/map/map.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MapComponentModule,
    SearchFormComponentModule,
    PlacesPageageRoutingModule
  ],
  declarations: [PlacesPage]
})
export class PlacesPageModule {}
