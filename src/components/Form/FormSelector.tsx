import { ReactNode } from "react";
import { FORM_STYLES as styles } from "../../config";

interface FormSelectorProps {
  children: ReactNode;
  values?: any[];
  defaultValue?: string | Number;
  defaultLabel?: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
}
export const FormSelector = ({ children, values, defaultValue, defaultLabel, handleChange, handleBlur}: FormSelectorProps) => {
  return (
    <div className="md:w-full">
      <select
      className={styles.selector}
        name="colorss"
        // value={values}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{ display: "block" }}
      >
        {children}
      </select>
    </div>
  );
};
