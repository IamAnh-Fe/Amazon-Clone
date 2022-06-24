import React from 'react'
import PropTypes from 'prop-types'
import Login from '../../components/Login/Login'
const LoginForm = props => {
    const handeleLoginFormSubmit = (values) => {
        console.log('Form submit: ', values)
    }
  return (
    <div>
        <Login onSubmit={handeleLoginFormSubmit}/>
    </div>
  )
}

LoginForm.propTypes = {}

export default LoginForm