import React from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage } from '@hookform/error-message';
import { BsFillFileLockFill} from "react-icons/bs";
import { useForm } from 'react-hook-form';
 const PasswordField = () => {
    const { register, formState: {errors}} = useForm()
  return (
    <div className="login-input">
                <div className="login-icon">
                  <i>
                    <BsFillFileLockFill />
                  </i>
                </div>
                <input {...register("password")} type="password" placeholder="Password"  />
               
                <ErrorMessage errors={errors} name="password" />
      
              {/* <ErrorMessage
                errors={errors}
             name="password"
                render={({ message }) => <p>{message}</p>}
              /> */}
              </div>
  )
}
PasswordField.propTypes = {
}

export default PasswordField;