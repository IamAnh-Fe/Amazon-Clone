import React from 'react'

const FilterByPrice = ({ data }) => {
  
  return (
    <div>
      <h3>Price</h3>
            {data.map((category) => (
                  <p key={category._id}>{category.price}</p>
                          ))}

    </div>
  )
}

export default FilterByPrice