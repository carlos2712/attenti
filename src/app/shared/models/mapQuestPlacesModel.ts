export interface HostedData {
    extraCriteria: string;
    columnNames: any[];
    tableName: string;
}

export interface DisplayLatLng {
    lng: number;
    lat: number;
}

export interface LatLng {
    lng: number;
    lat: number;
}

export interface Origin {
    dragPoint: boolean;
    displayLatLng: DisplayLatLng;
    adminArea4: string;
    adminArea5: string;
    postalCode: string;
    adminArea1: string;
    adminArea3: string;
    type: string;
    sideOfStreet: string;
    geocodeQualityCode: string;
    adminArea4Type: string;
    linkId: number;
    street: string;
    adminArea5Type: string;
    geocodeQuality: string;
    adminArea1Type: string;
    adminArea3Type: string;
    latLng: LatLng;
}

export interface Options {
    kmlStyleUrl: string;
    shapeFormat: string;
    maxMatches: number;
    pageSize: number;
    ambiguities: boolean;
    units: string;
    currentPage: number;
    radius: number;
}

export interface LatLng2 {
    lng: number;
    lat: number;
}

export interface MqapGeography {
    latLng: LatLng2;
}

export interface Fields {
    mqap_id: string;
    country: string;
    address: string;
    lng: number;
    city: string;
    group_sic_code_name_ext: string;
    group_sic_code: string;
    side_of_street: string;
    disp_lng: number;
    phone: string;
    group_sic_code_ext: string;
    group_sic_code_name: string;
    name: string;
    disp_lat: number;
    state: string;
    id: string;
    postal_code: string;
    mqap_geography: MqapGeography;
    lat: number;
}

export interface SearchResult {
    distanceUnit: string;
    distance: number;
    name: string;
    sourceName: string;
    resultNumber: number;
    fields: Fields;
    key: string;
    shapePoints: number[];
}

export interface Copyright {
    imageAltText: string;
    imageUrl: string;
    text: string;
}

export interface Info {
    copyright: Copyright;
    messages: any[];
    statusCode: number;
}

export interface mapQuestPlacesResponse {
    hostedData: HostedData[];
    resultsCount: number;
    origin: Origin;
    totalPages: number;
    options: Options;
    searchResults: SearchResult[];
    info: Info;
}