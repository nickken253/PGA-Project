import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useRegister } from '../../../lib/auth';
import storage from '../../../utils/storage';
import { useEffect, useState } from 'react';
import { notify } from '../../../components/notification';
import { EMAIL_REGEX } from '../../../config';
import { STYLES as styles } from './../../../config';
import { BUTTON_STYLES as btnStyles } from '../../../config';
import { Button } from '../../../components/Buttons';
import { useNavigate } from 'react-router-dom';

interface RegisterFormProps {
    onSuccess: () => void;
}

const validateEmail = (value: string) => {
    let error;
    if (!value) {
        error = 'Email is required';
    } else if (!EMAIL_REGEX.test(value)) {
        error = 'Invalid email address';
    }
    return error;
};

const validatePassword = (value: string) => {
    let error = [];
    if (!value) {
        error.push('Password is required');
    }
    if (value.length < 8) {
        error.push('Contain at least 8 characters');
    }
    if (!/[A-Z]/.test(value)) {
        error.push('Contain at least one uppercase letter');
    }
    if (!/[a-z]/.test(value)) {
        error.push('Contain at least one lowercase letter');
    }
    if (!/[0-9]/.test(value)) {
        error.push('Contain at least one number');
    }
    return error;
};

const validateConfirmPassword = (value: string, values: any) => {
    let error;
    
    if (!value) {
        error = 'Confirm password is required';
    } else if (value !== values.values.values.password) {
        error = 'Password does not match';
    }
    return error;
}


export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
    const navigate = useNavigate();
    const register = useRegister();
    const [data, setData] = useState(true);
    useEffect(() => {
        const token = storage.get('token');
        if (token) {
            onSuccess();
            notify({ type: 'success', mess: 'Đăng nhập thành công' });
        }

        if (register.data) {
            if (register.data.email) {
                notify({ type: 'error', mess: `${register.data.email}` });
                console.log(register.data.email);
                setData(false);
            } else {
                console.log(register.data);
                setData(true);
            }
        }
    }, [register.data, storage.get('token')]);

    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className='p-5 pt-20 bg-white rounded-3xl drop-shadow-lg md:w-[600px]'>
                <div className='flex items-center justify-center mb-10'>
                    <img src="https://cpq6cb.p3cdn1.secureserver.net/wp-content/uploads/2020/09/logo2.png" alt="PGA Logo" />
                </div>
                <Formik
                    initialValues={{ email: '', password: '', confirmPassword: '', fullName: '', gender: '', region: '', state: '' }}
                    onSubmit={(values, { setSubmitting }) => {
                        register.mutate({ email: values.email, password: values.password, confirmPassword: values.confirmPassword, fullName: values.fullName, gender: values.gender, region: values.region, state: values.state }); // return void
                        setSubmitting(false);
                    }}
                >
                    {(values) => (
                        <Form className={"w-full"}>
                            <div>

                                <div className="md:flex md:items-center mb-2">
                                    <div className="md:w-1/5">
                                        <label className={styles.label} htmlFor='Email'>
                                            Email
                                        </label>
                                    </div>
                                    <div className="md:w-4/5">
                                        <Field className={styles.field} validate={validateEmail} id='email' name='email' />
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/5"></div>
                                    <div className="md:w-4/5">
                                        <ErrorMessage component='a' className={styles.errorMsg} name='email' />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="md:flex md:items-center mb-2">
                                    <div className="md:w-1/5">
                                        <label className={styles.label} htmlFor='Password'>
                                            Password
                                        </label>
                                    </div>
                                    <div className="md:w-4/5">
                                        <Field className={styles.field} validate={validatePassword} id='password' name='password' />
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/5"></div>
                                    <div className="md:w-4/5">
                                        <ErrorMessage component='a' className={`${styles.errorMsg}`} name='password' />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="md:flex md:items-center mb-2">
                                    <div className="md:w-1/5">
                                        <label className={styles.label} htmlFor='ConfirmPassword'>
                                            Confirm Password
                                        </label>
                                    </div>
                                    <div className="md:w-4/5">
                                        <Field className={styles.field} validate={(value: string) => validateConfirmPassword(value, {values})} id='confirmPassword' name='confirmPassword' />
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/5"></div>
                                    <div className="md:w-4/5">
                                        <ErrorMessage component='a' className={styles.errorMsg} name='confirmPassword' />
                                    </div>
                                </div>
                            </div>

                            <div className="flex w-full md:items-center justify-center flex-col">
                                <div className="md:w-full flex items-center justify-center">
                                    <div className=''>
                                        <Button
                                            label='Register'
                                            type='submit'
                                            style='register'
                                        />
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    Have an account? <a href="" className='text-blue-600 hover:underline' onClick={() => { navigate('/auth/login') }}>Login here</a>
                                </div>
                            </div>
                        </Form >
                    )}
                </Formik >
            </div >
        </div >
    )
}
