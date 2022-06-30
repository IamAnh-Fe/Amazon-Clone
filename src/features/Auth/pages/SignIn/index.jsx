import React from 'react'
import SigninForm from '../../components/SigninForm'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { loginUser } from '~/apis/authApi';
const SignIn = () => {
const dispatch = useDispatch()
  const navigate = useNavigate()  
  const handleSubmit = async (values) => {
    loginUser(values, dispatch, navigate)
    
  };
  return (
    <>
      <SigninForm onSubmit={handleSubmit} />;
    </>
      )
}

export default SignIn