import React from 'react'
import { Link } from 'gatsby'
const Header = (data, children) => {
  return (
        <div className="container py-5 px-2 bg-primary">
            <div className="row py-5 px-4">
                <div className="col-sm-6 text-center text-md-left">
                    <h1 className="mb-3 mb-md-0 text-white text-uppercase font-weight-bold">About Me</h1>
                </div>
                <div className="col-sm-6 text-center text-md-right">
                    <div className="d-inline-flex pt-2">
                        <h4 className="m-0 text-white">
                            <Link to='/' className="text-white">Home</Link>
                        </h4>
                        <h4 className="m-0 text-white px-2">/</h4>
                        <h4 className="m-0 text-white">About Me</h4>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Header