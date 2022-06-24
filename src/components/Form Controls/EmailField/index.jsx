import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form';
import { BsFillPersonFill} from "react-icons/bs";
import { ErrorMessage } from '@hookform/error-message';
 const EmailField = (props) => {
    const {handleSubmitValues} = props;
   const { register,handleSubmit, formState: {errors}} = useForm()
    return (
        
        <div className="login-input">
            <form onSubmit={handleSubmit(handleSubmitValues)}>
         <input {...register("email")} type="text" placeholder="Email or Phone"/>
          <ErrorMessage errors={errors} name="email" />
      
      <ErrorMessage
        errors={errors}
        name="email"
        render={({ message }) => <p>{message}</p>}
      />
      
                <div className="login-icon">
                  <i>
                    <BsFillPersonFill />
                  </i>
                </div>
            </form>
              </div>
    
  )
}
EmailField.propTypes = {
}

export default EmailField;