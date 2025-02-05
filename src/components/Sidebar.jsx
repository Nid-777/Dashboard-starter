import React from 'react'
import Logo from 'public/imgs/logo.png'
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div className='Sidebars'>
            {/**LOGO */}
            <div className='logo'>
                <img src="/imgs/logo.png" alt="Logo" />
                <span>
                    Sh<span>o</span>ps
                </span>
            </div>
        </div>
    )
}

export default Sidebar