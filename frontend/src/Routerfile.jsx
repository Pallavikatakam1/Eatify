import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar.jsx';
import Navbar2 from './navbar2.jsx';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import FilterPage from './FilterPage.jsx';

const Routerfile = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<><Navbar /><Navbar2 /></>} />
                <Route path="/navbar2" element={<Navbar2 />} />
                <Route path="/signup" element={<Signup show={true} onClose={() => { window.history.back() }} />} />
                <Route path="/login" element={<Login show={true} onClose={() => { window.history.back() }} />} />
                <Route path="/FilterPage" element={<FilterPage show={true} onClose={() => { window.history.back() }} />} />
            </Routes>
        </Router>
    );
};

export default Routerfile;