import {
  FormGroup,
  FormError,
  FormLabel,
  FormField,
  FormSelector,
} from "../Form";
import { Field } from "formik";
import { EGender } from "../../config";
import { ChangeEvent } from "react";

export const GenderSelector = () => {
  return (
    <FormGroup>
      <FormLabel children="Gender" htmlFor="Gender" />
      <Field as="select" name="gender">
      <option value="">Select Gender</option>
      {Object.values(EGender).map((value: string) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </Field>
    </FormGroup>
  );
};
