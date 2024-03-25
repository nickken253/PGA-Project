import { getCountries } from "../features/auth";

async function getCounntryList(): Promise<any>{
    const response = await getCountries();
    return response;
}   

export default getCounntryList;