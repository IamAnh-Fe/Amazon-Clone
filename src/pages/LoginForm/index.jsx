import React from 'react'
import PropTypes from 'prop-types'
import Login from '../../components/Login/Login'
import Register from '../../components/Login/Register'
import { useDispatch } from 'react-redux'
import { register } from '../../features/Auth/userSlice'
import { unwrapResult } from '@reduxjs/toolkit'

const LoginForm = props => {
  const dispatch = useDispatch
    const handeleLoginFormSubmit = (values) => {
    console.log(values)
    }
  return (
    <div>
        <Login onSubmit={handeleLoginFormSubmit}/>
        {/* <Register onSubmit={handeleLoginFormSubmit}/> */}

    </div>
  )
}

LoginForm.propTypes = {}

export default LoginForm