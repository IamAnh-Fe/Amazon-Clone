import React from 'react'
import PropTypes from 'prop-types'

import { BsFillPersonFill, BsFillFileLockFill } from "react-icons/bs";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ErrorMessage } from '@hookform/error-message';

const Login = (props) => {
   const schema = yup.object({
     email: yup.string().required('Email is required').email('Please enter a valid email address.'),
     password: yup.string()
     .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
    retypePassword: yup.string()
    .required('Please retype your Password.')
    .oneOf([yup.ref('password')], 'Password does not match')
   });
    const { register, handleSubmit, formState: {errors}} = useForm({
          resolver: yupResolver(schema)
    });

  const handleSubmitValues = (values) => {
    const {onSubmit} = props;
    if (onSubmit){
      onSubmit(values);
    }
  }
  return (
    <div className="wrapper">
      <div className="container">
        <div className="login">
          <div className="login-form">
            <div className="login-title">Sign Up</div>
            <form onSubmit={handleSubmit(handleSubmitValues)}>
              <div className="login-input">
                <input
                  {...register("email")}
                  type="text"
                  placeholder="Email"
                />
                <p className="error">
                  <ErrorMessage errors={errors} name="email" />
                {/* <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }) => <p>{message}</p>}
                /> */}
                </p>


                <div className="login-icon">
                  <i>
                    <BsFillPersonFill />
                  </i>
                </div>
              </div>
              <div className="login-input">
                <div className="login-icon">
                  <i>
                    <BsFillFileLockFill />
                  </i>
                </div>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Password"
                />
                <p className="error">
                <ErrorMessage errors={errors} name="password" />  
                  </p>
              </div>

              <div className="login-input">
                <div className="login-icon">
                  <i>
                    <BsFillFileLockFill />
                  </i>
                </div>
                <input
                  {...register("retypePassword")}
                  type="password"
                  placeholder="Re-Type Password"
                />
                <p className="error">
                <ErrorMessage errors={errors} name="retypePassword" />
                </p>
              </div>
            
              <div className="login-button">
                <input type="submit" value="Sign Up" />
              </div>
            
            </form>
           
          </div>
        </div>
      </div>
    </div>
  );
}
Login.propTypes = {
  onSubmit: PropTypes.func,
}

export default Login;