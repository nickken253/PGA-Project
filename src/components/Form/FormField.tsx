import { Field } from "formik";
import { FORM_STYLES as styles } from "../../config";

interface FormFieldProps {
  name: string;
  type: string;
  id: string;
  placeholder: string;
  validate: (value: string) => string | undefined;
}

export const FormField = ({
  name,
  id,
  type,
  placeholder,
  validate,
}: FormFieldProps) => {
  return (
    <div className="md:w-4/5">
      <Field
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

{
  /* <div className="md:w-4/5">
                    <Field
                      className={styles.field}
                      validate={validateEmail}
                      id="email"
                      name="email"
                    />
                  </div> */
}
