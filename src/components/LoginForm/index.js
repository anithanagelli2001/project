import React, {useState} from 'react'
import Cookies from 'js-cookie'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = event => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await fetch('loginApiUrl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      })
      if (response.ok) {
        const data = await response.json()
        // Assuming the JWT token is received in data.token
        // Replace 'jwt_token' and expiry with actual token and expiry
        Cookies.set('jwt_token', data.token, {expires: 7})
        // Redirect to home after successful login
        history.replace('/')
      } else {
        // Handle invalid credentials error
        console.error('Invalid credentials')
      }
    } catch (error) {
      console.error('Login error:', error)
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/spotify-remix-login-music.png"
          alt="login website logo"
          className="login-logo"
        />
        <div className="form-group">
          <label htmlFor="username">USERNAME</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
