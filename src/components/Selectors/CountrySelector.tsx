import {
  FormGroup,
  FormError,
  FormLabel,
  FormField,
  FormSelector,
} from "../Form";
import { ChangeEvent, useEffect, useState } from "react";
import useLocationSelector from "../../hooks/useLocationSelector";
import { ICountryData } from "../../interfaces/location.interface";

export const CountrySelector = () => {
  const { countries, states, setCountryID } = useLocationSelector();
  const [value, setValue] = useState({ state: "state", pid: "0" });
  useEffect(() => {
    setCountryID(Number(value.pid));
    console.log(value);
    
    setValue({ state: "state", pid: "0" });
  }, [value.pid]);
  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue({ ...value, pid: e.target.value });
  };
  return (
    <>
      <FormGroup>
        <FormLabel children="Country" htmlFor="Contry" />
        <FormSelector
          defaultValue={0}
          defaultLabel="Select Country"
          values={countries}
          handleChange={handleCountryChange}
        >
          <option value="Select Country">Select Country</option>
          {countries.map((countrie) => (
            <option key={`${countrie.id}`} value={`${countrie.id}`}>
              {countrie.name}
            </option>
          ))}
        </FormSelector>
      </FormGroup>
      <FormGroup>
        <FormLabel children="State" htmlFor="State" />
        <FormSelector
          defaultValue={0}
          defaultLabel="Select State"
          values={states}
          handleChange={function (e: ChangeEvent<HTMLSelectElement>): void {
            throw new Error("Function not implemented.");
          }}
          >
          <option value="Select State">Select State</option>
          {states.map((state) => (
            <option key={`${state.id}`} value={`${state.id}`}>
              {state.name}
            </option>
          ))}
        </FormSelector>
      </FormGroup>
    </>
  );
};
