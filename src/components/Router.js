import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Auth from '../routes/Auth'
import Home from '../routes/Home'
import Profile from '../routes/Profile'
import Navigation from './Navigation'

function AppRouter({ isLoggedIn }) {
    console.log(isLoggedIn);

    return (
        <Router>
            {isLoggedIn ? <Navigation /> : <></>}
            <Routes>
                {
                    isLoggedIn ?
                        <>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/profile" element={<Profile />} />
                        </>
                        : <Route exact path="/" element={<Auth />} ></Route>
                }
            </Routes>
        </Router>
    )
}

export default AppRouter
