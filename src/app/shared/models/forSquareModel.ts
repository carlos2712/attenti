export interface Meta {
    code: number;
    requestId: string;
}

export interface LabeledLatLng {
    label: string;
    lat: number;
    lng: number;
}

export interface Location {
    address: string;
    lat: number;
    lng: number;
    labeledLatLngs: LabeledLatLng[];
    distance: number;
    postalCode: string;
    cc: string;
    city: string;
    state: string;
    country: string;
    formattedAddress: string[];
    crossStreet: string;
}

export interface Icon {
    prefix: string;
    suffix: string;
}

export interface Category {
    id: string;
    name: string;
    pluralName: string;
    shortName: string;
    icon: Icon;
    primary: boolean;
}

export interface Venue {
    id: string;
    name: string;
    location: Location;
    categories: Category[];
    referralId: string;
    hasPerk: boolean;
}

export interface Response {
    venues: Venue[];
    confident: boolean;
}

export interface ForSquareResponse {
    meta: Meta;
    response: Response;
}

