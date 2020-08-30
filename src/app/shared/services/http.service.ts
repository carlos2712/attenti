import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})
export class HttpService {

    public GOOGLE_BASE_URL = 'https://maps.googleapis.com/maps/api';
    public MAP_QUEST_BASE_URL = 'https://www.mapquestapi.com/';
    private MAP_QUEST_KEY = 'nl8SWxovD7n26LA6vJaR6hwYzUSN6f7u'; // NOT A GOOD PRACTICE JUST IN CASE . 
    private AERIS_KEY = 'jEymrBY9TLecU7bQdKLJv';
    // Rld7D0Xq7M2ynPsnTsduZc3sD6497YWBSkFMMyCF
    private httpOptions = {};
    constructor(
        public http: HttpClient,
    ) { }
    getGeoCode(address: string,) {
        return this.http.get(this.MAP_QUEST_BASE_URL + 'geocoding/v1/address?key=' + this.MAP_QUEST_KEY + '&location=' + address, this.httpOptions);
    }

    getPlaces(lat: number, long: number, rad: number) {
        return this.http.get(`${this.MAP_QUEST_BASE_URL}/search/v2/radius?key=${this.MAP_QUEST_KEY}&maxMatches=50&origin=${lat},${long}&radius=${rad}`);
    }
    getFourSquarePlaces(lat: number, long: number, rad: number) {
        return this.http.get(`https://api.foursquare.com/v2/venues/search?&client_id=BSDUIMO0F2HFSCXAPG3ECO5PLNRV0UCTCLLPKSBKAQGOPIS3&v=20200830&client_secret=VV4Z5FDDHIEYFFGROP2DLSGDZHECNGESKDQUQRTGZ5Z4QHRU&ll=${lat},${long}&radius=${rad}`);
    }
}
