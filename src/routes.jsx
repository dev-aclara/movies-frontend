import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

const routes = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage/>}></Route>
                <Route exact path="/login" element={<LoginPage/>}></Route>
            </Routes>
        </Router>
    )
}

export default routes;