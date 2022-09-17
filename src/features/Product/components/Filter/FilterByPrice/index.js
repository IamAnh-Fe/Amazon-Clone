import React, { useState } from 'react'

const FilterByPrice = ({ onChange, filterList }) => {
   const [values, setValues] = useState({
     salePrice_gte: "",
         salePrice_lte: "",
   });
     const handleChange = (e) => {
       const { name, value } = e.target;
       setValues((prevValues) => ({
         ...prevValues,
         [name]: value,
       }));
     };
     const handleSubmit = () => {
       if (onChange) onChange(values);
     };
  return (
    <div className="filterPrice">
      <h3>Price</h3>
 <ul>
        {filterList && filterList.price.length > 0 &&
        filterList.price.map((category) => (
          <li>
            
            <label>{category}</label>
          </li>
        ))}
      </ul>
      <div>
        <form>
          <span className="filterPrice-dollar">$</span>
          <input
            type="text"
            placeholder="Min"
            className="filterPrice-input"
            name="salePrice_gte"
            value={values.salePrice_gte}
            onChange={handleChange}
          />

          <span className="filterPrice-dollar">$</span>
          <input
            type="text"
            placeholder="Max"
            className="filterPrice-input"
            name="salePrice_lte"
            value={values.salePrice_lte}
            onChange={handleChange}
          />
          <button
            type="button"
            className="filterPrice-submit"
            onClick={handleSubmit}
          >
            Go
          </button>
        </form>
      </div>
    </div>
  );
}

export default FilterByPrice



// import React, { useState } from "react";

// function FilterByPrice({ onChange }) {
//   const [values, setValues] = useState({
//     price_gte: '',
//     price_lte: '',

//   });
//   const handleOnchange = (e) => {
//     const { name, value } = e.target;
//     setValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };
//   const handleSubmit = () => {
//     console.log(values);
//     if (onChange) onChange(values);
//   };
//   return (
//     <div className="sidebar-box">
//       <h3 className="titlefilter">Price</h3>
//       <input
//         max="500"
//         type="text"
//         name="price_gte"
//         value={values.price_gte}
//         onChange={handleOnchange}
//         className="sidebar-range"
//       />
//       <input
//         max="500"
//         type="text"
//         name="price_lte"
//         value={values.price_lte}
//         onChange={handleOnchange}
//         className="sidebar-range"
//       />
//       <div className="sidebar-price">
//         <h4 className="sidebar-number">$0 - ${values.price_lte}</h4>
//         <a className="sidebar-filter" onClick={handleSubmit}>
//           Filter
//         </a>
//       </div>
//     </div>
//   );
// }

// export default FilterByPrice;