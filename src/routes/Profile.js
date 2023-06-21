import React from 'react'
import { authService } from '../fbase'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const navigate = useNavigate()
    const onLogoutClick = () => {
        authService.signOut()
        navigate("/")
    }

  return (
    <div>
        <button onClick={onLogoutClick}>Logout</button>
    </div>
  )
}

export default Profile