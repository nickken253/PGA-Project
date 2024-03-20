import React from 'react'
import { Formik } from 'formik'
import { useLogin } from '../../../lib/auth';
import { axios } from '../../../lib/axios';
import style from './LoginForm.module.scss';
import {
  loginEmailAndPassword,
  LoginCredentials,
  AuthUser,
  UserResponse,
} from "../../../features/auth";
import storage from '../../../utils/storage';
import { useEffect, useState } from 'react';
import { on } from 'events';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from '../../../components/notification';
import { error } from 'console';
interface LoginFormProps {
  onSuccess: () => void;
}

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const login = useLogin();
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  useEffect(() => {
    const token = storage.get('token');
    if (token) {
      // console.log('token', token);
      onSuccess();
      notify({ type: 'success', mess: 'Đăng nhập thành công' })
    }
  },);
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='p-5 py-20 bg-white rounded-3xl drop-shadow-lg md:w-[600px]'>
        <div className='flex items-center justify-center mb-10'>
          <img src="https://cpq6cb.p3cdn1.secureserver.net/wp-content/uploads/2020/09/logo2.png" alt="PGA Logo" />
        </div>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
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
            if (!values.password) {
              errors.password = 'Required';
            }
            if (errors.email === undefined)
            setIsValidEmail(true);
            else
              setIsValidEmail(false);

            if (errors.password === undefined)
              setIsValidPassword(true);
            else
              setIsValidPassword(false);
            console.log('errors', errors);
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {

            login.mutate({ email: values.email, password: values.password });
            // console.log("data: ",login.data);
            
            const token = storage.get('token');
            if (token) {
              notify({ type: 'success', mess: 'Login success' })
              console.log('token', token);

              // onSuccess();
            }
            else {
              // notify({type: 'error', mess: 'Login failed'});
            }
            setSubmitting(false);
            // setSubmitting(true);
          }}
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <form noValidate onSubmit={handleSubmit} className="w-full">
              <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/5">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
                    Email
                  </label>
                </div>
                <div className="md:w-4/5">
                  <input
                    className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder='Email address'
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/5"></div><div className="md:w-4/5">
                  <div className={`text-sm text-red-600 ${errors.email !== "Required" ? 'invisible' : ''} `}>Vui lòng nhập email</div>
                </div>
              </div>
              <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/5">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="password">
                    Password
                  </label>
                </div>
                <div className="md:w-4/5">
                  <input
                    className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder='Password'
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/5"></div><div className="md:w-4/5">
                  <div className={`text-sm text-red-600 ${errors.password !== "Required" ? 'invisible' : ''} `}>Vui lòng nhập mật khẩu</div>
                </div>
              </div>
              <div className="flex w-full md:items-center justify-center flex-col">
                <div className="md:w-full flex items-center justify-center">
                  <button
                    className={`shadow bg-purple-500 hover:bg-purple-600 focus:shadow-outline-purple focus:outline-none text-white font-bold py-2 px-4 rounded ${!values.email || !values.password ? 'opacity-50 bg-gray-500 hover:bg-gray-500' : ''}`}
                    type="submit"
                    disabled={!values.email || !values.password}
                  >
                    Log In
                  </button>
                </div>
                <div className='mt-5'>
                  <a href="" className='text-blue-600 hover:underline'>
                    Forgotten password ?
                  </a>
                </div>
              </div>
            </form>
          )}
        </Formik>

      </div >
    </div >
  )
}
