import React from "react";
import SignupForm from "../../../Auth/components/SignupForm";
const SignUp = (props) => {
  const handleSubmit = (values) => {
    console.log("check:", values);
  };
  return (
    <>
      <SignupForm onSubmit={handleSubmit} />
    </>
  );
};

export default SignUp;
