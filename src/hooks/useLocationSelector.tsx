import { useEffect, useState } from "react";
import { ICountryData, IStateData } from "../interfaces/location.interface"; 
import { getCountries, getStatesByCountryID } from "../features/auth";   

export default function useLocationSelector(){
    const [countries, setCountries] = useState<ICountryData[]>([]);
    const [states, setStates] = useState<IStateData[]>([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
              const response = await getCountries();
              console.log(response);
              
              setCountries(response.data); // Update countries state with fetched data
            } catch (error) {
              console.error("Error fetching countries:", error);
            }
          };
      
          fetchCountries();
    }, []);

    const setCountryID = (countryID: number) => {
        if(!countryID) 
        {
            setStates([]);
            return;
        
        }
        getStatesByCountryID(countryID).then((response) => {
            setStates(response.data);
        });
    }
    return {countries, states, setCountryID};
};