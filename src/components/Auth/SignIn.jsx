import React from 'react'
import PropTypes from 'prop-types'
import logo from "../../assets/logo/auth.png"
import { Link } from "react-router-dom";
import {AiFillFacebook, AiFillGoogleSquare} from "react-icons/ai";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ErrorMessage } from '@hookform/error-message';

const SignIn = props => {
  const schema = yup.object({
     email: yup.string().required('Email is required').email('Please enter a valid email address.'),
     password: yup.string()
     .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
   });
    const { register, handleSubmit, formState: {errors}} = useForm({
          resolver: yupResolver(schema)
    });

    const handleSignInSubmit = (values) => {
      console.log(values)
    const {onSubmit} = props;
    if (onSubmit){
      onSubmit(values);
    } 
  };
  return (
   
<div className ="auth">
	<div className="auth-box">
		<div className="auth-info">
			<div >
        <img className="auth-logo" src={logo} alt="" />
			</div>
       <form onSubmit={handleSubmit(handleSignInSubmit)}>
			<div className="auth-form">
				    <div className="auth-field">
                <input {...register("email")} type="email" placeholder="Email" />
                <label>Email</label>
                  <p className="error">
                  <ErrorMessage errors={errors} name="email" />
                </p>
            </div>
            <div className="auth-field">
                <input {...register("password")} type="password" placeholder="Password" />
                <label>Password</label>
                 <p className="error">
                <ErrorMessage errors={errors} name="password" />  
                  </p>
            </div>
			  <button className="auth-button" variant='success' type='submit'>
                Log In
              </button>
			</div>
       </form>
			<div className="auth-or">
				<div className="auth-line"></div>
				<p>OR</p>
				<div className="auth-line"></div>
			</div>
			<div className="auth-dif">
        <div className="auth-gg">
          <span><AiFillGoogleSquare/></span>
					<p>Log in with Google</p>
				</div>
				<div className="auth-fb">
          <span><AiFillFacebook/></span>
					<p>Log in with Facebook</p>
				</div>
				<div className="auth-forgot">
					<a>Forgot password?</a>
				</div>
			</div>
		</div>
		<div className="auth-signup">
			<p>Don't have an account? <a><Link to="sign-up">Sign up</Link></a></p>
		</div>
    </div>
    </div>

  )
}
SignIn.propTypes = {
  onSubmit: PropTypes.func,
}
export default SignIn