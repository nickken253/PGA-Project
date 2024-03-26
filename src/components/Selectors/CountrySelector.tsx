import {
  FormGroup,
  FormError,
  FormLabel,
  FormField,
  FormSelector,
} from "../Form";
import { Field } from "formik";
import { ChangeEvent, useEffect, useState } from "react";
import useLocationSelector from "../../hooks/useLocationSelector";
import { ICountryData } from "../../interfaces/location.interface";

export const CountrySelector = () => {
  const { countries, states, setCountryID } = useLocationSelector();
  const [value, setValue] = useState({ state: "state", pid: "0" });
  useEffect(() => {
    setCountryID(Number(value.pid));
    // setValue({ state: "state", pid: "0" });
    console.log(value);
  }, [value.pid]);
  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(prevValue => ({ ...prevValue, pid: e.target.value }));
    console.log(value);
    
  };
  return (
    <>
      <FormGroup>
        <FormLabel children="Country" htmlFor="Contry" />
        <Field as="select" name="region" id="region" onClick={handleCountryChange}>
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={`${country.id}`} value={`${country.id}`}>
              {country.name}
            </option>
          ))}
        </Field>
        {/* <FormSelector
          name="region"
          defaultValue={0}
          defaultLabel="Select Country"
          values={countries}
          // handleChange={handleCountryChange}
        >
          <option value="">Select Gender</option>
          {countries.map((country) => (
            <option key={`${country.id}`} value={`${country.id}`}>
              {country.name}
            </option>
          ))}
        </FormSelector> */}
      </FormGroup>
      <FormGroup>
        <FormLabel children="State" htmlFor="State" />
        <FormSelector
          name="state"
          defaultValue={0}
          defaultLabel="Select State"
          values={states}
          handleChange={function (e: ChangeEvent<HTMLSelectElement>) { 
            const inputElement = e.target;
            inputElement.value = e.target.value;
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
