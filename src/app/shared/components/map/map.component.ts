import { Component, Input, AfterContentInit, OnDestroy, OnInit } from '@angular/core';
import { GoogleMaps, GoogleMapsEvent, LatLng, MarkerOptions, Marker, GoogleMapsAnimation, Circle } from "@ionic-native/google-maps";
import { Subscription } from 'rxjs';
import { MapService } from '../../services/map.services';
import { utils } from '../../utils/utils';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterContentInit, OnDestroy {
  @Input() mapid : string;
  public subRefreshMap: Subscription;
  public map: any;
  public currentCircle: Circle;
  public currentMarks: Marker[];
  constructor(
    public mapService: MapService
  ) { }

  ngOnInit() {
    //
    this.initMapCoordinates();
    this.subRefreshMap = this.mapService.refreshMap.subscribe((data: any) => {
      if (data === this.mapid){
        this.relocateMap();
      }
  
    });
  }

  ngAfterContentInit() {
    this.loadMap()
  }
  ngOnDestroy() {
    this.subRefreshMap.unsubscribe();
  
  }
  initMapCoordinates(){
    this.mapService.initMapCoordinates();
  }
  setMarks(){   
    for (let index = 0; index < this.mapService.marks.length; index++) {
      const mark = this.mapService.marks[index];
      let gmark = this.map.addMarkerSync({
        title: mark.name,
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: mark.shapePoints[0],
          lng: mark.shapePoints[1]
        }
      })
      this.currentMarks.push(gmark)
  
    }
  }
  relocateMap() {
    if (this.currentCircle){
      this.currentCircle.remove();
    }
    this.removeMarks();
    this.map.animateCamera({
      target:  new LatLng(this.mapService.location.lat, this.mapService.location.lng),
      zoom: 10,
      duration: 5000
    });
    this.setMarks();

    this.setRad(utils.milesToMtrs(this.mapService.currentRad));
    this.mapService.isLoading = false;
  }

  removeMarks() {
    if (this.currentMarks && this.currentMarks.length > 0){
      for (let index = 0; index < this.currentMarks.length; index++) {
        const element = this.currentMarks[index];
        element.remove();
      }
    }
    this.currentMarks = [];
  }

  setRad(rad){

    this.currentCircle = this.map.addCircleSync({
      'center': this.mapService.location,
      'radius': rad,
      'strokeColor' : '#F1F0F9',
      'strokeWidth': 5,
      'fillColor' : '#6F7B9B',
      'clickable' : true   // default = false
    });


  }
  loadMap() {
    /* The create() function will take the ID of your map element */
    this.map = GoogleMaps.create(this.mapid);
    this.map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
      const coordinates: LatLng = new LatLng(this.mapService.location.lat, this.mapService.location.lng);
      this.map.setCameraTarget(coordinates);
      this.map.setCameraZoom(8);
    });
  }

}
