import React from 'react'
import { Link } from 'gatsby'

const Navi = (data, location) => {
    return (
    <div className='container p-0'>
        <nav className= "navbar navbar-expand-lg bg-secondary navbar-dark justify-content-center"> 
            <button type='button' className = 'navbar-toggler' data-toggle = 'collapse' data-target = '#navbarCollapse'> 
                <span className = "navbar-toggler-icon" /> 
            </button>
            <div className = "collapse navbar-collapse justify-content-between" id='navbarCollapse'> 
                <div className='navbar-nav m-auto align-items-center'>
                    <Link 
                        to = '/'
                        className='nav-item nav-link'
                    >
                        Home
                    </Link>
                    <Link 
                        to = '/about'
                        className='nav-item nav-link'
                    >
                        About
                    </Link>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navi