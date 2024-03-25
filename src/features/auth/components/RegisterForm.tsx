import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRegister } from "../../../lib/auth";
import storage from "../../../utils/storage";
import { useEffect, useState } from "react";
import { notify } from "../../../components/notification";
import { EMAIL_REGEX } from "../../../config";
import { Button } from "../../../components/Buttons";
import { useNavigate } from "react-router-dom";
import {
    FormField,
    FormLabel,
    FormGroup,
    FormError,
} from "../../../components/Form";
import { GenderSelector, CountrySelector } from "../../../components/Selectors";
import { EGender } from "../../../config";

interface RegisterFormProps {
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
    } else if (value.length < 8) {
        error = "Contain at least 8 characters";
    } else if (!/[A-Z]/.test(value)) {
        error = "Contain at least one uppercase letter";
    } else if (!/[a-z]/.test(value)) {
        error = "Contain at least one lowercase letter";
    } else if (!/[0-9]/.test(value)) {
        error = "Contain at least one number";
    } else if (!/[!@#$%^&*]/.test(value)) {
        error = "Contain at least one special character";
    }
    return error;
};

const validateConfirmPassword = (value: string, values: any) => {
    let error;
    if (!value) {
        error = "Confirm password is required";
    } else if (value !== values.values.password) {
        error = "Password does not match";
    }
    return error;
};

const validateBlank = (value: string) => {
    let error;
    if (!value) {
        error = "This field is required";
    }
    return error;
};

export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
    const navigate = useNavigate();
    const register = useRegister();
    useEffect(() => {
        const token = storage.get("token");
        if (token) {
            onSuccess();
            notify({ type: "success", mess: "Đăng nhập thành công" });
        }

        if (register.data) {
            if (register.data.email) {
                notify({ type: "error", mess: `${register.data.email}` });
                console.log(register.data.email);
            } else {
                console.log(register.data);
            }
        }
    }, [register.data, storage.get("token")]);

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
                    initialValues={{
                        email: "",
                        password: "",
                        confirmPassword: "",
                        fullName: "",
                        gender: "",
                        region: "",
                        state: "",
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        debugger;
                        register.mutate({
                            email: values.email,
                            password: values.password,
                            confirmPassword: values.confirmPassword,
                            fullName: values.fullName,
                            gender: values.gender,
                            region: values.region,
                            state: values.state,
                        });
                        setSubmitting(false);
                    }}
                >
                    {(values) => (
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

                            <FormGroup>
                                <FormLabel
                                    children="Confirm Password"
                                    htmlFor="confirmPassword"
                                />
                                <FormField
                                    type="password"
                                    placeholder="Confirm Password"
                                    validate={(value: string) =>
                                        validateConfirmPassword(value, values)
                                    }
                                    id="confirmPassword"
                                    name="confirmPassword"
                                />
                                <FormError component="a" name="confirmPassword" />
                            </FormGroup>
                            
                            <FormGroup>
                                <FormLabel children="Full Name" htmlFor="FullName" />
                                <FormField
                                    type="text"
                                    placeholder="Full Name"
                                    validate={validateBlank}
                                    id="fullName"
                                    name="fullName"
                                />
                            <FormError component="a" name="fullName" />
                            </FormGroup>

                            <GenderSelector />
                            <CountrySelector />

                            <div className="flex w-full md:items-center justify-center flex-col">
                                <div className="md:w-full flex items-center justify-center">
                                    <div className="">
                                        <Button label="Register" type="submit" style="register" />
                                    </div>
                                </div>
                                <div className="mt-5">
                                    Have an account?{" "}
                                    <a
                                        href=""
                                        className="text-blue-600 hover:underline"
                                        onClick={() => {
                                            navigate("/auth/login");
                                        }}
                                    >
                                        Login here
                                    </a>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};
