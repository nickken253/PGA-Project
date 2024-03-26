import { ReactNode } from "react";
import { FORM_STYLES as styles } from "../../config";
import { Field } from "formik";
interface FormSelectorProps {
  children: ReactNode;
  values?: any[];
  defaultValue?: string | Number;
  defaultLabel?: string;
  name: string;
  handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
}
export const FormSelector = ({
  children,
  name,
  values,
  defaultValue,
  defaultLabel,
  handleChange,
  handleBlur,
}: FormSelectorProps) => {
  // Sau khi chọn lựa chọn thì hiển thị nó lên trên form
  return (
    <div className="md:w-full">
      {/* <select
        className={styles.selector}
        id={name}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{ display: "block" }}
      >
        {children}
      </select> */}
      <Field
        as="select"
        className={styles.selector}
        id={name}
        name={name}
        onClick={handleChange}
        onBlur={handleBlur}
      >
        {children}
      </Field>
    </div>
  );
};
