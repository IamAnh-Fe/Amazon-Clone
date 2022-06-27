import React from 'react'
import SigninForm from '../../components/SigninForm'
const SignIn = () => {
   const handleSubmit = (values) => {
     console.log("check:", values);
   };
  return (
    <>
      <SigninForm onSubmit={handleSubmit} />;
    </>
      )
}

export default SignIn