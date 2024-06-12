import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScroll, faUser, faBars } from '@fortawesome/free-solid-svg-icons'

function LeftDasboard() {
    return (
        <div className='left-dashboard'>
            <div className='left-dashboard-upper'>
                <div className='dashboard-icon'><FontAwesomeIcon icon={faScroll} /></div>

                <div className='upper-content'>Material Dashboard</div>
            </div>

            <div className='top-bars'></div>

            <div className='left-dashboard-middel'>
                <div className='middel-content'>LARAVEL EXAMPLES</div>

                <div className='user'>
                    <div className='user-1'>
                        <div className='user-icon'><FontAwesomeIcon icon={faUser} /></div>
                        <div className='user-content'>User Profile</div>
                    </div>

                    <div className='user-2'>
                        <div className='user-management-icon'><FontAwesomeIcon icon={faBars} /></div>
                        <div className='user-content'>User Management</div>
                    </div>
                </div>

                <div className='middel-content'>PAGES</div>
            </div>

            <div className='bottom-bars'></div>

            <div className='left-dashboard-bottom'>
                <button className='bottom-btn'>FREE DOWNLOAD</button>
                <button className='bottom-btn'>VIEW DOCUMENTATION</button>
                <button className='bottom-btn'>UPGRADE TO PRO</button>

            </div>
        </div>
    )
}

export default LeftDasboard