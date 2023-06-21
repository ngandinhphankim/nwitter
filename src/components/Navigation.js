import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/profile'}>My profile</NavLink>
        </>
    )
}

export default Navigation