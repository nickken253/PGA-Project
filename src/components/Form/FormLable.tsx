import { ReactNode } from "react";
import { FORM_STYLES as styles } from "../../config";

interface FormLabelProps {
  children: ReactNode;
  htmlFor: string;
}
export const FormLabel = ({ children, htmlFor }: FormLabelProps) => {
  return (
    <div className="md:w-full">
      <label htmlFor={htmlFor} className={styles.label}>
        {children}
      </label>
    </div>
  );
};
