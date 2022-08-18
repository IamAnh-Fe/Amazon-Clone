import React from 'react'
import ThemeMenu from "../ThemeMenu"
import avatar from "~/assets/logo/avatar.jpg"

const TopNav = () => {
    return (
    <div className = 'topNav' >
        <div className='topNav-menu'></div>
            <div className='topNav-right'>
                <div className='topNav-avatar'>
                    <img src={avatar} alt='avatar' />
                </div>
                <div className='topNav-palette'>
                    <ThemeMenu />
                </div>
            </div>
      
  </div>
        
    )
}

export default TopNav