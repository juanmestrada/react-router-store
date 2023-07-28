import './Navbar.css';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="Navbar-links">
                <ul>
                    <NavLink to="/fruits" className={({ isActive }) => (isActive ? 'active' : '')}>Fresh Produce</NavLink>
                    <NavLink to="/meats" className={({ isActive }) => (isActive ? 'active' : '')}>Meats & Seafood</NavLink>
                    <NavLink to="/Snacks" className={({ isActive }) => (isActive ? 'active' : '')}>Snacks</NavLink>
                </ul>
            </div>
            <div className='Navbar-title pc'><Link to="/">React Market</Link></div>
            <div className='Navbar-title mobile'><Link to="/">RM</Link></div>
        </div>
    )
}

export default Navbar;