import React, { useState } from 'react'
import { authService } from '../fbase'

function Auth() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [newAccount, setNewAccount] = useState(true)

    function onChange(event) {
        const { name, value } = event.target
        if (name === "email") {
            setEmail(value)
        } else if (name === "password") {
            setPassword(value)
        }
        console.log(email, password)
    }

    async function onSubmit(event) {
        event.preventDefault()
        try {
            if (newAccount) {
                await authService.createUserWithEmailAndPassword(email, password)
            } else {
                await authService.signInWithEmailAndPassword(email, password)
            }
        }
        catch (err) {
            console.log(err.message)
        }
    }

    function toggleAccount() {
        setNewAccount(prev => !prev)
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={email}
                    name="email"
                    type="text"
                    required
                    placeholder="Email"
                />
                <input
                    onChange={onChange}
                    value={password}
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                />
                <button>{newAccount ? "Create account" : "Sign in"}</button>
            </form>
            <span onClick={toggleAccount}>{newAccount ? "Sign in":"Create account" }</span>
            <div>
                <button>Log in with Google</button>
                <button>Log in with Github</button>
            </div>
        </div>
    )
}

export default Auth
