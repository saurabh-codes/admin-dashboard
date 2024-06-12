import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faGear, faBell } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <div className='navbar-left-content-1'> <span>Pages</span> / Dashboard</div>
                <div className='navbar-left-content-2'>Dashboard</div>
            </div>

            <div className='navbar-right'>
                <input type="text" placeholder='Enter your data...' />
                <div className='navbar-icons'>
                    <div className='nav-icon navbar-user-icon'><FontAwesomeIcon icon={faUser} /></div>
                    <div className='nav-icon navbar-sign-out'>Sign Out</div>
                    <div className='nav-icon navbar-setting-icon'><FontAwesomeIcon icon={faGear} /></div>
                    <div className='nav-icon navbar-bell-icon'><FontAwesomeIcon icon={faBell} /></div>
                </div>

            </div>

        </div>
    )
}

export default Navbar