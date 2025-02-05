import React from 'react'
import Logo from '../../imgs/logo.png'
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div className='Sidebar'>
            {/**LOGO */}
            <div className='logo'>
                <img src={Logo} alt=" " />
                <span>
                    Sh<span>o</span>ps
                </span>
            </div>

            {/* MENU */}
            <div className='menu'>
                <div className='menuItem'>
                    <div >
                        Icon
                    </div>
                    <span>Dashboard</span>
                </div>

            </div>
        </div>
    )
}

export default Sidebar