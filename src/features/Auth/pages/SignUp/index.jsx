import React from "react";
import SignupForm from "../../../Auth/components/SignupForm";
import { useDispatch } from "react-redux";
import { registerUser } from '~/apis/authApi';
const SignUp = (props) => {
  // const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleSubmit = async (values) => {
  registerUser(values, dispatch)
  };
  return (
    <>
      <SignupForm onSubmit={handleSubmit} />
    </>
  );
};

export default SignUp;
