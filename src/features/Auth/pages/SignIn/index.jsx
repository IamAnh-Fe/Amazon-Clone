import React from 'react'
import SigninForm from '../../components/SigninForm'
import {login} from '../../userSlice'
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
const SignIn = () => {
   const dispatch = useDispatch()
  const handleSubmit = async (values) => {
    try {
      const action = login(values)
      const resultAction = await dispatch(action)
      const user = unwrapResult(resultAction)
      console.log("current user:", user);
    } catch (error) {
      console.log('Failed to login:', error)
    }
    
  };
  return (
    <>
      <SigninForm onSubmit={handleSubmit} />;
    </>
      )
}

export default SignIn