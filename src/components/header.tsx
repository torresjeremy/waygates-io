import react from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex justify-between text-2xl pb-16">
            <div className="box-shadow p-4">
                waygates.io
            </div>
            <div className="flex space-x-10 items-center">
                <div className="box-shadow p-2"><NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink></div>
                <div className="box-shadow p-2"><NavLink to="/team" className={({ isActive }) => (isActive ? 'active-link' : '')}>Team</NavLink></div>
                <div className="box-shadow p-2"><NavLink to="/utilities" className={({ isActive }) => (isActive ? 'active-link' : '')}>Utilities</NavLink></div>
                <div className="box-shadow p-2"><NavLink to="/partners" className={({ isActive }) => (isActive ? 'active-link' : '')}>OG Partners</NavLink></div>
            </div>
        </div>
    )
};

export default Header;