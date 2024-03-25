import {
  FormGroup,
  FormError,
  FormLabel,
  FormField,
  FormSelector,
} from "../Form";
import { EGender } from "../../config";
import { ChangeEvent } from "react";

export const GenderSelector = () => {
  return (
    <FormGroup>
      <FormLabel children="Gender" htmlFor="Gender" />
      <FormSelector
        values={Object.values(EGender)}
        defaultLabel = "Select Gender"
        handleChange={function (e: ChangeEvent<HTMLSelectElement>): void {
          throw new Error("Function not implemented.");
        }}
      >
        <option value="Select Gender">Select Gender</option>
        {Object.values(EGender).map((value: string) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
        </FormSelector>
    </FormGroup>
  );
};
