import { Field } from "formik";
import { FORM_STYLES as styles } from "../../config";

interface FormFieldProps {
  as?: string;
  name?: string;
  type: string;
  id: string;
  placeholder: string;
  validate?: (value: string) => string | undefined;
}

export const FormField = ({
  name,
  id,
  type,
  placeholder,
  validate,
  as,
}: FormFieldProps) => {
  return (
    <div className="md:w-full">
      <Field
        as={as}
        className={styles.field}
        validate={validate}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

