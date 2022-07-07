import React from 'react'

const FilterByBrand = ({data}) => {
  
  return (
    <div>
      <h3>Brand</h3>
                {data.map((category) => (
                  <p key={category._id}>{category.brand}</p>
                          ))}


    </div>
  )
}

export default FilterByBrand