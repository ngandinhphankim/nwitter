import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Auth from '../routes/Auth'
import Home from '../routes/Home'

function AppRouter({ isLoggedIn }) {

    return (
        <Router>
            <Switch>
                {isLoggedIn ? <><Route path="/"><Home /></Route></> : <Route path="/"><Auth /></Route>}
            </Switch>
        </Router>
    )
}

export default AppRouter
