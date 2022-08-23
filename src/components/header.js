import React from 'react'

const Header = ({location}) => {
  return (
        <div className="container py-2 bg-primary mb-2">
            <div className="row justify-content-center">
                    <h1 className="mb-md-0 text-white text-uppercase font-weight-bold text-wrap">{location}</h1>
            </div>
        </div>
  )
}

export default Header