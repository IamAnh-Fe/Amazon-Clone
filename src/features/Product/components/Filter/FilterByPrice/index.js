import React, { useState } from 'react'

const FilterByPrice = ({ data, onChange }) => {
  const [values, setValues] = useState({
        price_gte: '', 
        price_lte: ''
    })
  const handleOnchange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }))
  };

  const handleSubmit = () => {
        console.log(values)
        if (onChange) onChange(values)
      
    }
  return (
    <div className='filterPrice'>
      <h3>Price</h3>
      <div>
        <form>
        <span className='filterPrice-dollar'>$</span>
        <input 
        type="text" 
        placeholder='Min' 
        className='filterPrice-input'
        value={values.price_gte}
        // onChange={handleOnchange}
         />

        <span className='filterPrice-dollar'>$</span>
        <input 
        type="text"
        placeholder='Max' 
        className='filterPrice-input'
        value={values.price_lte}
        // onChange={handleOnchange}
         />
        <button className='filterPrice-submit' type='submit' onClick={handleSubmit}>
          Go
        </button>
        </form>
    </div>
    </div>

  )
}

export default FilterByPrice