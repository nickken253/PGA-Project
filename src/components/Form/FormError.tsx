import { FORM_STYLES as styles } from "../../config";
import { ErrorMessage } from "formik";

interface FormErrorProps {
  component?: string;
  name?: string;
}

export const FormError = ({ component, name }: FormErrorProps) => {
  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/5"></div>
      <div className="md:w-4/5">
        <ErrorMessage
          component={component}
          className={styles.errorMsg}
          name={`${name}`}
        />
      </div>
    </div>
  );
};
