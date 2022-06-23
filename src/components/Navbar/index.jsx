import React from 'react'
import NavLeft from './NavLeft'
import { NavRight } from './NavRight'
import { NavSearch } from './NavSearch'

const Header = () => {
  return (
<div className='wrapper'>
  <div className="container">
    <div className="navbar">

<NavLeft />  
<NavSearch/>
<NavRight />
    </div>
  </div>
</div>
)
}


export default Header;