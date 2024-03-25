import { FORM_STYLES as styles } from "../../config";
import { ErrorMessage } from "formik";

interface FormErrorProps {
  component?: string;
  name?: string;
}

export const FormError = ({ component, name }: FormErrorProps) => {
  return (
    <div className="md:flex md:items-center mb-2 absolute w-full bottom-0 translate-y-8">
      <div className="md:w-full flex justify-end">
        <ErrorMessage
          component={component}
          className={styles.errorMsg}
          name={`${name}`}
        />
      </div>
    </div>
  );
};
