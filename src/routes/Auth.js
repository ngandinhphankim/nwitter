import React, { useState } from 'react'
import { authService, firebaseInstance } from '../fbase'

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

    const onSocialClick = async (event) => {
        const { target: { name } } = event;
        let provider;
        if (name == "google") {
            provider =  new firebaseInstance.auth.GoogleAuthProvider();
        } else if(name == "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        const data = await firebaseInstance.auth().signInWithPopup(provider);
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
            <span role='button' onClick={toggleAccount}>{newAccount ? "Sign in" : "Create account"}</span>
            <div>
                <button name='google' onClick={onSocialClick}>Log in with Google</button>
                <button name='github' onClick={onSocialClick}>Log in with Github</button>
            </div>
        </div>
    )
}

export default Auth
