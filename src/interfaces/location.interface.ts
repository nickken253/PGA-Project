export interface ICountryResponse {
    message: string;
    error: boolean;
    code: Number;
    data?: ICountryData;
}

export interface ICountryData {
    id: Number;
    pid: Number | null;
    name: string;
    createdAt: string;
}
export interface IStateResponse {
    message: string;
    error: boolean;
    code: Number;
    data?: IStateData;
}

export interface IStateData {
    id: Number;
    pid: Number | null;
    name: string;
    createdAt: string;
}
