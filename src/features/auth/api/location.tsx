import { axios } from '../../../lib/axios';
import { ICountryData, ICountryResponse } from '../../../interfaces/location.interface';
    

// export const getCountries = async (): Promise<ICountryData[]> => {
export const getCountries = async (): Promise<any> => {
    const response = await axios.get<ICountryResponse>('/location');
    console.log(response);
    
    return response;
}

export const getStatesByCountryID = async (countryID: number): Promise<any> => {
    const response = await axios.get(`/location/?pid=${countryID}`);
    return response;
}