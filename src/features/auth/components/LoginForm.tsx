import { Formik, Form, Field, ErrorMessage } from "formik";
import { useLogin } from "../../../lib/auth";
import storage from "../../../utils/storage";
import { useEffect } from "react";
import { notify } from "../../../components/notification";
import { EMAIL_REGEX } from "../../../config";
import { Button } from "../../../components/Buttons";
import { useNavigate } from "react-router-dom";
import {
  FormField,
  FormError,
  FormGroup,
  FormLabel,
} from "../../../components/Form";

interface LoginFormProps {
  onSuccess: () => void;
}

const validateEmail = (value: string) => {
  let error;
  if (!value) {
    error = "Email is required";
  } else if (!EMAIL_REGEX.test(value)) {
    error = "Invalid email address";
  }
  return error;
};

const validatePassword = (value: string) => {
  let error;
  if (!value) {
    error = "Password is required";
  }
  return error;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const login = useLogin();
  const navigate = useNavigate();
  useEffect(() => {
    const token = storage.get("token");
    if (token) {
      onSuccess();
      notify({ type: "success", mess: "Đăng nhập thành công" });
    }
    if (login.data) {
      if (login.data.message !== "OK") {
        notify({ type: "error", mess: `${login.data.message}` });
      }
    }
  }, [login.data]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="p-5 pt-20 bg-white rounded-3xl drop-shadow-lg md:w-[600px]">
        <div className="flex items-center justify-center mb-10">
          <img
            src="https://cpq6cb.p3cdn1.secureserver.net/wp-content/uploads/2020/09/logo2.png"
            alt="PGA Logo"
          />
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            login.mutate({ email: values.email, password: values.password }); // return void
            setSubmitting(false);
          }}
        >
          {() => (
            <Form className={"w-full"}>
              <FormGroup>
                <FormLabel children="Email" htmlFor="email" />
                <FormField
                  type="email"
                  placeholder="Email Address"
                  validate={validateEmail}
                  id="email"
                  name="email"
                />
                <FormError component="a" name="email" />
              </FormGroup>

              <FormGroup>
                <FormLabel children="Password" htmlFor="password" />
                <FormField
                  type="password"
                  placeholder="Password"
                  validate={validatePassword}
                  id="password"
                  name="password"
                />
                <FormError component="a" name="password" />
              </FormGroup>

              <div className="flex w-full md:items-center justify-center flex-col">
                <div className="md:w-full flex items-center justify-center">
                  <div className="">
                    <Button label="Login" type="submit" style="login" />
                  </div>
                </div>
                <div className="mt-5">
                  <a href="" className="text-blue-600 hover:underline">
                    Forgotten password ?
                  </a>
                </div>
              </div>
              <div className="w-full h-px bg-gray-300 my-5"></div>
              <div className="flex w-full md:items-center justify-center flex-col">
                <div className="md:w-full flex items-center justify-center">
                  <div className="">
                    <Button
                      label="Create New Account"
                      onClick={() => {
                        navigate("/auth/register");
                      }}
                      style="register"
                    />
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
