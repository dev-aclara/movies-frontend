import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';


const routes = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage/>}></Route>
                <Route exact path="/login" element={<LoginPage/>}></Route>
                <Route exact path="/dashboard" element={<Dashboard/>}></Route>
            </Routes>
        </Router>
    )
}

export default routes;