import React from 'react'
import SignIn from '../../components/Auth/SignIn'
import SignUp from '../../components/Auth/SignUp'
const Auth = (props) => {
     const handleSubmit = (values) => {
    console.log('check:',values)
    }
  return (
    <>
     <SignIn onSubmit={handleSubmit}/>
        <SignUp onSubmit={handleSubmit}/>
    </>
  )
}

export default Auth