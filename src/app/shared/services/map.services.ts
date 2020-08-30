import { Injectable } from '@angular/core';
import { LatLng, MapQuestResponse } from '../models/mapquestGeoCodeModel';
import { Subject } from 'rxjs';
import { HttpService } from './http.service';
import { utils } from '../utils/utils';
import { mapQuestPlacesResponse } from '../models/mapQuestPlacesModel';
import { ForSquareResponse } from '../models/forSquareModel';



@Injectable({
    providedIn: 'root'
})
export class MapService {
    public refreshMap = new Subject<any>();
    public location: LatLng
    public marks: any[];
    public isLoading: boolean;
    public currentRad: number;

    constructor(
        public http: HttpService,
    ) { }


    sendRefreshMap() {
        this.refreshMap.next();
    }

    initMapCoordinates() {
        this.location = {
            lat: 28.1821167,
            lng: -82.5922785
        }
    }

    getValuesForMap(address, rad, type = 'Places') {
        this.currentRad = rad;
        this.isLoading = true;
        this.http.getGeoCode(utils.sanitazeAddress(address)).subscribe((res: MapQuestResponse) => {
            if (res && res.results && res.results.length > 0) {
                if (res.results[0].locations && res.results[0].locations.length > 0) {
                    const location = res.results[0].locations[0];
                    this.location = location.latLng;
                    if (type === 'Places') {
                        this.http.getPlaces(this.location.lat, this.location.lng, rad).subscribe((res: mapQuestPlacesResponse) => {
                            if (res && res.searchResults) {
                                this.marks = res.searchResults;
                                this.refreshMap.next('MapPlaces');
                            }
                            else {
                                this.isLoading = false;
                            }
                        })
                    }
                    else {
                        this.http.getFourSquarePlaces(this.location.lat, this.location.lng, rad).subscribe((res: ForSquareResponse) => {
                            if (res && res.response && res.response.venues && res.response.venues.length > 0) {
                                this.marks = res.response.venues.map(v => {
                                    return {
                                        name: v.name,
                                        shapePoints: [v.location.lat, v.location.lng]
                                    }
                                })
                                this.refreshMap.next('fSquareMap');
                            }
                            else {
                                this.isLoading = false;
                            }

                        })

                    }
                }
                else {
                    this.isLoading = false;
                }

            }
        })
    }

}
