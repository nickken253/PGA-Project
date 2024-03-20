import React from 'react'
import { Formik } from 'formik'

interface RegisterFormProps {
    onSuccess: () => void;
}

export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '' ,confirmPassword:''}}
                validate={values => {
                    console.log('values', values);
                    const errors: any = {}
                    if (!values.email) {
                        errors.email = 'Required'
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                            values.email
                        )
                    ) {
                        errors.email = 'Invalid email address'
                    }
                    errors.password = [];
                    if (!values.password) {
                        errors.password.push('Required');
                    }
                    if (values.password.length < 8) {
                        errors.password.push('Contain at least 8 characters');
                    }
                    if (!/[A-Z]/.test(values.password)) {
                        errors.password.push('Contain at least one uppercase letter');
                    } if (!/[a-z]/.test(values.password)) {
                        errors.password.push('Contain at least one lowercase letter');
                    } if (!/\d/.test(values.password)) {
                        errors.password.push('Contain at least one number');
                    } if (!/[@$!%*?&]/.test(values.password)) {
                        errors.password.push('Contain at least one special character');
                    }
                    console.log('errors', errors);
                    return errors
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false)
                    }, 400)
                }}
            >
                {({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={values.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Password</label>
                            <input
                                type="confirmPassword"
                                id="confirmPassword"
                                value={values.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit">Sign In</button>
                    </form>
                )}
            </Formik>
        </div >
    )
}
