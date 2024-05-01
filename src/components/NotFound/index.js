import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <img alt="page not found" />
      <Link to="/">
        <button>Home Page</button>
      </Link>
    </div>
  )
}

export default NotFound
