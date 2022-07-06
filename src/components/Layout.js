
import React from 'react'
import Navi from './navbar'
import Sidebar from './sidebar'
import {Script} from 'gatsby'
import "../css/style.css"

const Layout = ({children}) => {
  return (
    <body>
        <div className='wrapper'>
            <Sidebar />
            <div className = 'content'> 
                <Navi />
                {children}
            </div>
        </div>
        <Script src="https://code.jquery.com/jquery-3.4.1.min.js" strategy='post-hydrate'/>
        <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js" strategy='post-hydrate'/>
        <Script src="../lib/easing/easing.min.js" strategy='post-hydrate'/>
        <Script src="../lib/waypoints/waypoints.min.js" strategy='post-hydrate'/>
        <Script src="../js/main.js" strategy='post-hydrate'/>
    </body>
  )
}

export default Layout